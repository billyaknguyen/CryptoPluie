import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


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
      { filteredCoins.map((coin) => {
        return (
          <>
          <div>{coin.id}</div>
          <Link to={`/coin/${coin.id}`}>
          <img src={coin.image}></img>
          </Link>
          <div>{coin.name}</div>
          <div>${coin.current_price}</div>
          <div>${coin.market_cap}</div>
          </>
        )
      })}
      <button onClick={previousPageHandle}> back</button>
      <span>{currentPage}</span>
      <button onClick= {nextPageHandle}>next</button>
    </>
  );
};

export default CoinsPage;
