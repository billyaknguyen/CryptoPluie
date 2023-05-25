import {toast} from "react-toastify"
const apiLink = import.meta.env.VITE_API;

const suggestCoinHandle = async (loggedInUser, friendUserId, messageData,fetchUserPortfolio,
  updateUserPortfolio,) => {
  try {
    const response = await fetch(`${apiLink}/api/suggestCoin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ loggedInUser, userId: friendUserId, messageData }),
    });

    const result = await response.json();
    const awaitingSuggestion = async () => {
      await fetchUserPortfolio(loggedInUser, updateUserPortfolio)
    }

    if (result.status === 200) {
      toast.promise (
        awaitingSuggestion(),
        {
          pending: "Financial Advise Pending",
          success: "Your Suggestion has been successfully sent",
          error: "Oops, Please try again"
        },
        {
          autoClose: 3000,
        }
      )
    }
  } catch (error) {
    console.error("Error suggesting coin:", error);
  }
}


export default suggestCoinHandle;
