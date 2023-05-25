const apiLink = import.meta.env.VITE_API;

const addNewCoin = async (userId, coinData) => {
  try {
    const response = await fetch(`${apiLink}/api/addCoin`, {
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

export default addNewCoin;
