const suggestCoinHandle = async (loggedInUser, friendUserId, messageData,fetchUserPortfolio,
  updateUserPortfolio,) => {
  try {
    const response = await fetch("/api/suggestCoin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ loggedInUser, userId: friendUserId, messageData }),
    });

    const result = await response.json();

    if (result.status === 200) {
      await fetchUserPortfolio(loggedInUser, updateUserPortfolio)
      alert("Coin suggested successfully!");
    } 
  } catch (error) {
    console.error("Error suggesting coin:", error);
  }
};

export default suggestCoinHandle;
