import {toast} from "react-toastify"

const addCoinHandle = async (
  user,
  singleCoin,
  quantity,
  fetchUserPortfolio,
  updateUserPortfolio,
  addNewCoin,
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
      const awaitingCoinAdding = async () => {
      await addNewCoin(user.sub, coinData);
      await fetchUserPortfolio(user.sub, updateUserPortfolio);
      }
      toast.promise (
        awaitingCoinAdding(),
        {
          pending: "Money printer goes BRRRRRRRRR",
          success: `${coinData.coin_quantity}  ${coinData.coin_name} has been successfully added to your portfolio`,
          error: "Money printer is broken, please try again"
        },
        {
          autoClose: 3000,
        }
      )
    }
  } catch (error) {
    console.log(error);
  }
};

export default addCoinHandle;
