import { useAuth0 } from "@auth0/auth0-react";
import { createContext, useReducer, useEffect, useState } from "react";

export const UserPortfolioContext = createContext();

const initialState = {
  holdings: [],
  balance: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "fetch_portfolio":
      return {
        ...state,
        holdings: action.holdings,
        balance: action.balance,
      };
    default:
      throw new Error(`Action unknown: ${action.type}`);
  }
};

export const UserPortfolioProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { user } = useAuth0();

  useEffect(() => {
    if (user) {
      const fetchPortfolio = async (userId) => {
        try {
          const response = await fetch(`/api/user/${userId}`);
          const data = await response.json();
          if (data.status === 200) {
            dispatch({
              type: "fetch_portfolio",
              holdings: data.data.holdings,
              balance: data.data.balance,
            });
          }
        } catch (error) {
          console.log(error);
        }
      };
      fetchPortfolio(user.sub);
    }
  }, [user]);


  const updateUserPortfolio = (holdings, balance) => {
    dispatch({ type: "fetch_portfolio", holdings, balance });
  };


  return (
    <UserPortfolioContext.Provider
      value={{
        state,
        actions: {
          updateUserPortfolio,
        },
      }}
    >
      {children}
    </UserPortfolioContext.Provider>
  );
};

