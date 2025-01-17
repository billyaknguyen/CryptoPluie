import { useState, useContext, useEffect } from "react";
import { UserPortfolioContext } from "../utils/UserPortfolioContext";
import priceFormatter from "../utils/priceFormatter";
import {
  CoinPageContainer,
  CoinImg,
  CoinCard,
  CoinName,
  CoinCardItem,
  CoinPrice,
  ButtonsWrapper,
  CoinCardWrapper,
  CoinCardContainer,
  PaginationButton,
  BackButton,
  NextButton,
  LeftArrow,
  RightArrow,
  Title,
  CoinPercentage,
  CoinModelImg,
} from "./CoinsPageStyles";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import Error from "../Error/Error";

const CoinsPage = () => {
  const { coins, loadingCoin, errorCoin } = useContext(UserPortfolioContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const coinsPerPage = 25;

  useEffect(() => {
    const numberOfPages = Math.ceil(coins.length / coinsPerPage);
    setTotalPages(numberOfPages);
  }, [coins]);

  const nextPageHandle = () => {
    if (currentPage < totalPages)
      setCurrentPage((previousNumber) => previousNumber + 1);
  };

  const previousPageHandle = () => {
    if (currentPage > 1) {
      setCurrentPage((previousNumber) => previousNumber - 1);
    }
  };

  const generatePageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  };

  if(errorCoin) {
    return <Error/>
  }

  if (loadingCoin) {
    return <LoadingSpinner />;
  }

  const startingIndex = (currentPage - 1) * coinsPerPage;
  const endingIndex = startingIndex + coinsPerPage;
  const filteredCoins = coins.slice(startingIndex, endingIndex);

  return (
    <CoinPageContainer>
      <CoinModelImg src="https://cdn.discordapp.com/attachments/899929905318486046/1296713163932307456/ModelImgFlipped-removebg-preview.png?ex=671349be&is=6711f83e&hm=c3cd4c0872159dc2679fe4c017c64ef38b5e524e9ccc7872824250050b3f17d4&" />

      <CoinCardWrapper>
        <Title>Today's Cryptocurrency Prices</Title>
        <CoinCardContainer>
          {filteredCoins.map((coin, index) => {
            return (
              <CoinCard to={`/coin/${coin.id}`} key={index}>
                <CoinCardItem>
                  <CoinImg src={coin.image}></CoinImg>
                  <CoinName>{coin.name}</CoinName>
                  <CoinPrice>{priceFormatter(coin.current_price)}</CoinPrice>
                  <CoinPercentage
                    isNegative={coin.price_change_percentage_24h < 0}
                  >
                    {coin.price_change_percentage_24h
                      ? coin.price_change_percentage_24h > 0
                        ? `+${coin.price_change_percentage_24h.toFixed(2)}%`
                        : `${coin.price_change_percentage_24h.toFixed(2)}%`
                      : "N/A"}
                  </CoinPercentage>
                </CoinCardItem>
              </CoinCard>
            );
          })}
        </CoinCardContainer>
        <ButtonsWrapper>
          <BackButton onClick={previousPageHandle}>
            <LeftArrow />
          </BackButton>
          {generatePageNumbers().map((pageNumber) => (
            <PaginationButton
              key={pageNumber}
              onClick={() => {
                setCurrentPage(pageNumber);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              active={pageNumber === currentPage}
            >
              {pageNumber}
            </PaginationButton>
          ))}
          <NextButton onClick={nextPageHandle}>
            <RightArrow />
          </NextButton>
        </ButtonsWrapper>
      </CoinCardWrapper>
    </CoinPageContainer>
  );
};

export default CoinsPage;
