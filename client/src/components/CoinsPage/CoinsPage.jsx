import { useState, useEffect } from "react";


const CoinsPage = () => {
  const [coins, setCoins] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const getAllCoins = async (pageNumber) => {
    try {
      const response = await fetch(`/api/coins?pageNumber=${pageNumber}`);

       if (response.status === 429) {
        console.log("limit reached")
       }
       
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
    if (currentPage < 15 )
   setCurrentPage((previousNumber) => previousNumber + 1)
   getAllCoins(currentPage + 1)
  }

  const previousPageHandle = () => {
    if (currentPage > 1) {
      setCurrentPage((previousNumber) => previousNumber - 1);
      getAllCoins(currentPage - 1 )
    }
  }

  if (loading) {
    return <div>
      loading
    </div>
  }
  return (
    <>
      { coins && coins.map((coin) => {
        return (
          <>
          <div>{coin.id}</div>
          <img src={coin.image}></img>
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
