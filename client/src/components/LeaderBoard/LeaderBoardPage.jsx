import { useContext, useState, useEffect } from "react";
import Error from "../Error/Error";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import { UserPortfolioContext } from "../utils/UserPortfolioContext";
import {
  LeaderBoardWrapper,
  LeaderBoardTitle,
  LeaderBoardContainer,
  UserContainer,
  LeaderBoardBox,
  UserInfoContainer,
  BalanceContainer,
  ColumnContainer,
  TopCoinsContainer,
  GeneralTitle,
  CoinImage,
  GeneralItem,
  RowContainer,
  LeaderBoardImage,
  CoinLinkContainer,
} from "./LeaderBoardPageStyles";

const LeaderBoardPage = () => {
  const [users, setUsers] = useState([]);
  const [userLoading, setUserLoading] = useState(true);
  const [error, setError] = useState(false);
  const { coins, loadingCoin, errorCoin } = useContext(UserPortfolioContext);

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
        setUserLoading(false);
      } catch (error) {
        setError(true);
        setUserLoading(false);
        console.log(error);
      }
    };
    fetchUsers();
  }, [coins]);

  if (error || errorCoin) {
    return <Error />;
  }

  if (loadingCoin || userLoading) {
    return <LoadingSpinner />;
  }

  const topCoins = (holdings) => {
    const coinMarketValue = holdings.map((holding) => {
      const coin = coins.find((coin) => coin.id === holding.coin_id);
      const currentPrice = coin ? coin.current_price : 0;
      const marketValue = holding.coin_quantity * currentPrice;
      return { ...holding, marketValue };
    });
    const sortedCoinMarketValue = coinMarketValue
      .sort((a, b) => b.marketValue - a.marketValue)
      .slice(0, 3);

    return sortedCoinMarketValue;
  };

  return (
    <LeaderBoardWrapper>
      <LeaderBoardTitle>Leaderboard</LeaderBoardTitle>
      <LeaderBoardContainer>
        <LeaderBoardImage
          src={
            "https://cdn.discordapp.com/attachments/899929905318486046/1103905172301819944/trophy_billy.png"
          }
        />
        <LeaderBoardBox>
          {users.map((user, index) => {
            return (
              <UserContainer key={index}>
                <UserInfoContainer>
                  <ColumnContainer>
                    <GeneralTitle>Rank</GeneralTitle>
                    <GeneralItem>{index + 1}</GeneralItem>
                  </ColumnContainer>
                  <ColumnContainer>
                    <GeneralTitle>User</GeneralTitle>
                    <GeneralItem>{user.username}</GeneralItem>
                  </ColumnContainer>
                </UserInfoContainer>
                <BalanceContainer>
                  <ColumnContainer>
                    <GeneralTitle>Net Worth</GeneralTitle>
                    <GeneralItem>{user.netWorth.toFixed(2)}</GeneralItem>
                  </ColumnContainer>
                  <ColumnContainer>
                    <GeneralTitle>Portfolio Value</GeneralTitle>
                    <GeneralItem>{user.portfolioValue.toFixed(2)}</GeneralItem>
                  </ColumnContainer>
                </BalanceContainer>
                <TopCoinsContainer>
                  <ColumnContainer>
                    <GeneralTitle>Top Coins</GeneralTitle>
                    <RowContainer>
                      {topCoins(user.holdings).map((coin, index) => {
                        return (
                          <CoinLinkContainer
                            key={index}
                            to={`/coin/${coin.coin_id}`}
                          >
                            <CoinImage src={coin.coin_image} />
                          </CoinLinkContainer>
                        );
                      })}
                    </RowContainer>
                  </ColumnContainer>
                </TopCoinsContainer>
              </UserContainer>
            );
          })}
        </LeaderBoardBox>
      </LeaderBoardContainer>
    </LeaderBoardWrapper>
  );
};

export default LeaderBoardPage;
