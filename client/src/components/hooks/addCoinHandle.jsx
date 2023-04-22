const addCoinHandle = async (
  user,
  singleCoin,
  quantity,
  fetchUserPortfolio,
  updateUserPortfolio,
  addNewCoin
) => {
  try {
    if (user && singleCoin) {
      const coinData = {
        coin_id: singleCoin._id,
        coin_name: singleCoin.name,
        coin_image: singleCoin.image,
        coin_symbol: singleCoin.symbol,
        coin_quantity: parseFloat(quantity),
        coin_purchasePrice: singleCoin.current_price,
      };
      await addNewCoin(user.sub, coinData);
      await fetchUserPortfolio(user.sub, updateUserPortfolio);
      alert("Coin added");
    }
  } catch (error) {
    console.log(error);
  }
};

export default addCoinHandle;
