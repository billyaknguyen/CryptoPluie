import { useAuth0 } from "@auth0/auth0-react";
import { createContext, useReducer, useEffect, useState } from "react";

export const UserPortfolioContext = createContext();

const initialState = {
  holdings: [],
  balance: null,
  suggestions: [],
  suggestionHistory: [],
  pendingSuggestions: []
};

const reducer = (state, action) => {
  switch (action.type) {
    case "fetch_portfolio":
      return {
        ...state,
        holdings: action.holdings,
        balance: action.balance,
        suggestions: action.suggestions,
        suggestionHistory: action.suggestionHistory,
        pendingSuggestions: action.pendingSuggestions
      };
      
    default:
      throw new Error(`Action unknown: ${action.type}`);
  }
};

export const UserPortfolioProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [coins, setCoins] = useState([])
  const [errorCoin, setErrorCoin] = useState(false)
  const [errorHolding, setErrorHolding] = useState(false)
  const [loadingCoin, setLoadingCoin] = useState(true)
  const [loadingHolding, setLoadingHolding] = useState(true)
  const { user } = useAuth0();
  const apiLink = import.meta.env.VITE_API;



  useEffect(() => {
    if (user) {
      const fetchPortfolio = async (userId) => {
        try {
          const response = await fetch(`${apiLink}/api/user/${userId}`);
          const resData = await response.json();
          if (resData.status === 200) {
            dispatch({
              type: "fetch_portfolio",
              holdings: resData.data.holdings,
              balance: resData.data.balance,
              suggestions: resData.data.suggestions,
              suggestionHistory: resData.data.suggestionHistory,
              pendingSuggestions: resData.data.pendingSuggestions
            });
            setLoadingHolding(false)
          }
        } catch (error) {
          setErrorHolding(true)
          setLoadingHolding(false)
          console.log(error)
        }
      };
      fetchPortfolio(user.sub);
    }
  }, [user]);

  useEffect(() => {

 const fetchCoins = async () => {
  try {
    const response = await fetch(`${apiLink}/api/coins`);
    const resData = await response.json();
    setCoins(resData.data)
    setLoadingCoin(false)
  } catch (error) {
    setErrorCoin(true)
    setLoadingCoin(false)
    console.log(error)
  }
 }
 fetchCoins()
  }, [])


  const updateUserPortfolio = (holdings, balance, suggestions, suggestionHistory, pendingSuggestions) => {
    dispatch({ type: "fetch_portfolio", holdings, balance, suggestions, suggestionHistory, pendingSuggestions});
  };


  return (
    <UserPortfolioContext.Provider
      value={{
        state,
        coins,
        loadingCoin,
        loadingHolding,
        errorCoin,
        errorHolding,
        actions: {
          updateUserPortfolio,
        },
      }}
    >
      {children}
    </UserPortfolioContext.Provider>
  );
};

