
const sellCoinHandle = async (user, singleCoin, quantity, fetchUserPortfolio, updateUserPortfolio, sellCoin) => {
    try {
      if (user && singleCoin) {
        const coinData = {
          coin_id: singleCoin._id,
          coin_quantity: parseFloat(quantity),
          coin_salePrice: singleCoin.current_price
        };
        await sellCoin(user.sub, coinData);
        await fetchUserPortfolio(user.sub, updateUserPortfolio)
        alert("Coin sold");
      }
    } catch (error) {
      console.log(error);
    }
  };
  
  export default sellCoinHandle;
  