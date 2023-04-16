const fetchUserPortfolio = async (userId, action) => {
  try {
    const response = await fetch(`/api/user/${userId}`);
    const data = await response.json();
    if (data.status === 200) {
      action(data.data.holdings, data.data.balance);
    }
  } catch (error) {
    console.log(error);
  }
};

export default fetchUserPortfolio;
