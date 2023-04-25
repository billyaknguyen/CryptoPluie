const fetchUserPortfolio = async (userId, updateUserPortfolio) => {
  try {
    const response = await fetch(`/api/user/${userId}`);
    const resData = await response.json();
    if (resData.status === 200) {
      updateUserPortfolio(
        resData.data.holdings,
        resData.data.balance,
        resData.data.suggestions,
        resData.data.suggestionHistory,
        resData.data.pendingSuggestions
      );
    }
  } catch (error) {
    console.log(error);
  }
};

export default fetchUserPortfolio;
