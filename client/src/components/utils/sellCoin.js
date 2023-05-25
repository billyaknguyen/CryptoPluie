const apiLink = import.meta.env.VITE_API;

const sellCoin = async (userId, coinData) => {
  try {
    const response = await fetch(`${apiLink}/api/sellCoin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId,
        ...coinData,
      }),
    });

    const resData = await response.json();
    return resData;
  } catch (error) {
    console.log(error);
  }
};

export default sellCoin;
