import { useContext, useState, useEffect } from "react";
import { UserPortfolioContext } from "../utils/UserPortfolioContext";

const LeaderBoardPage = () => {
  const [users, setUsers] = useState([]);
  const [userLoading , setUserLoading] = useState(true)
  const { coins, loadingCoin, } = useContext(UserPortfolioContext);

  const handleNetWorth = (user, coins) => {
    const portfolioValue = user.holdings.reduce((total, holding) => {
      const coin = coins.find((coin) => coin.id === holding.coin_id);
      const currentPrice = coin ? coin.current_price : 0;
      const marketValue = holding.coin_quantity * currentPrice;
      return total + marketValue;
    }, 0);

    const netWorth = portfolioValue + user.balance;

    return { portfolioValue, netWorth };
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("/api/users");
        const resData = await response.json();
        const allUsers = resData.data;
        const usersNetWorth = allUsers.map((user) => {
          const { portfolioValue, netWorth } = handleNetWorth(user, coins);
          return {
            ...user,
            portfolioValue,
            netWorth,
          };
        });
        // sorted by net worth
        const sortedNetWorthUsers = usersNetWorth.sort(
          (a, b) => b.netWorth - a.netWorth
        );
        setUsers(sortedNetWorthUsers);
        setUserLoading(false)
      } catch (error) {
        console.log(error);
      }
    };
    fetchUsers();
  }, [coins]);

  const topCoins = (holdings) => {
    const coinMarketValue = holdings.map((holding) => {
      const coin = coins.find((coin) => coin.id === holding.coin_id);
      const currentPrice = coin ? coin.current_price : 0;
      const marketValue = holding.coin_quantity * currentPrice;
      return { ...coin, marketValue };
    });
    console.log(coinMarketValue)
    const sortedCoinMarketValue = coinMarketValue
      .sort((a, b) => b.marketValue - a.marketValue)
      .slice(0, 3);

    return sortedCoinMarketValue;

  };

  if (loadingCoin || userLoading) {
    return <div>loading...</div>;
  }

  return (
    <div style= {{marginTop: 200}} >
      {users.map((user, index) => {
        return (
          <div key={index}>
            {index + 1} : {user.username} - Net Worth = {user.netWorth} - Portfolio Value = {user.portfolioValue} 
            - Balance = {user.balance}
            <div>
              Top 3 coins :
              {topCoins(user.holdings).map((coin, index) => {
                return (
                  <div> 
                    {index + 1} : {coin.name} - Market Value = {coin.marketValue}
                  </div>
                )
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default LeaderBoardPage;
