import {toast} from "react-toastify"

const sellCoinHandle = async (
  user,
  singleCoin,
  quantity,
  fetchUserPortfolio,
  updateUserPortfolio,
  sellCoin
) => {
  try {
    if (user && singleCoin) {
      const coinData = {
        coin_id: singleCoin._id,
        coin_quantity: parseFloat(quantity),
        coin_salePrice: singleCoin.current_price,
      };
      const awaitingCoinSelling = async () => {
        await sellCoin(user.sub, coinData);
        await fetchUserPortfolio(user.sub, updateUserPortfolio);
      }
      toast.promise(
        awaitingCoinSelling(),
        {
        pending: "Money printer goes BRRRRRRRRR",
        success: ` 🚀 Successfully sold ${coinData.coin_quantity} ${coinData.coin_id}`,
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

export default sellCoinHandle;
