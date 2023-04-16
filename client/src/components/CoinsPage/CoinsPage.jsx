import { useState, useEffect } from "react"
import {CoinPageContainer, CoinImg, CoinCard, CoinName,CoinH2, CoinCardItem,CoinPrice, ButtonsWrapper, CoinCardWrapper} from "./CoinsPageStyles"


const CoinsPage = () => {
  const [coins, setCoins] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const getAllCoins = async () => {
    try {
      const response = await fetch("/api/coins");
      const resData = await response.json();
      setCoins(resData.data)
      setLoading(false)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllCoins(currentPage)
  }, [])

  const nextPageHandle = () => {
    if (currentPage < 10 )
   setCurrentPage((previousNumber) => previousNumber + 1)
  }

  const previousPageHandle = () => {
    if (currentPage > 1) {
      setCurrentPage((previousNumber) => previousNumber - 1);

    }
  }

  if (loading) {
    return <div>
      loading
    </div>
  }
  console.log(coins)

  const startingIndex = (currentPage - 1) * 25;
  const endingIndex = startingIndex + 25
  const filteredCoins = coins.slice(startingIndex,endingIndex)
 
  return (
    <>
    <h1>NAV BAR </h1>
    <CoinPageContainer>
      <CoinH2>Coins</CoinH2>
      <CoinCardWrapper>
      { filteredCoins.map((coin, index) => {
        return (
          <CoinCard to={`/coin/${coin.id}`} key={index}>
            <CoinCardItem>
          <CoinImg src={coin.image}></CoinImg>
          <CoinName>{coin.name}</CoinName>
          <CoinPrice>{coin.current_price}</CoinPrice>
          </CoinCardItem>
          </CoinCard>
          
        )
      })}
      </CoinCardWrapper>
    </CoinPageContainer>
    <ButtonsWrapper>
    <button onClick={previousPageHandle}> back</button>
    <span>{currentPage}</span>
    <button onClick= {nextPageHandle}>next</button>
    </ButtonsWrapper>
    </>
  );
};

export default CoinsPage;
