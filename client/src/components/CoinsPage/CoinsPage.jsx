import { useState, useContext } from "react";
import { UserPortfolioContext } from "../utils/UserPortfolioContext";
import {
  CoinPageContainer,
  CoinImg,
  CoinCard,
  CoinName,
  CoinH2,
  CoinCardItem,
  CoinPrice,
  ButtonsWrapper,
  CoinCardWrapper,
} from "./CoinsPageStyles";

const CoinsPage = () => {
  const { coins, loadingCoin } = useContext(UserPortfolioContext);
  const [currentPage, setCurrentPage] = useState(1);

  const nextPageHandle = () => {
    if (currentPage < 10)
      setCurrentPage((previousNumber) => previousNumber + 1);
  };

  const previousPageHandle = () => {
    if (currentPage > 1) {
      setCurrentPage((previousNumber) => previousNumber - 1);
    }
  };

  if (loadingCoin) {
    return <div>loading</div>;
  }

  console.log(coins);

  const startingIndex = (currentPage - 1) * 25;
  const endingIndex = startingIndex + 25;
  const filteredCoins = coins.slice(startingIndex, endingIndex);

  return (
    <>
      <CoinPageContainer>
        <CoinH2>Coins</CoinH2>
        <CoinCardWrapper>
          {filteredCoins.map((coin, index) => {
            return (
              <CoinCard to={`/coin/${coin.id}`} key={index}>
                <CoinCardItem>
                  <CoinImg src={coin.image}></CoinImg>
                  <CoinName>{coin.name}</CoinName>
                  <CoinPrice>${coin.current_price}</CoinPrice>
                </CoinCardItem>
              </CoinCard>
            );
          })}
        </CoinCardWrapper>
      </CoinPageContainer>
      <ButtonsWrapper>
        <button onClick={previousPageHandle}> back</button>
        <span>{currentPage}</span>
        <button onClick={nextPageHandle}>next</button>
      </ButtonsWrapper>
    </>
  );
};

export default CoinsPage;
