const addNewCoin = async (userId, coinData) => {
  try {
    const response = await fetch("/api/addCoin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId,
        ...coinData,
      }),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default addNewCoin;
