const getAllCoins = async (req, res) => {
  try {
    const pageNumber = req.query.pageNumber;
    const response = await fetch(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=${pageNumber}&sparkline=false&locale=en`
    );

    if (response.status === 429) {
      return res.status(429).json({ status: 429, message: "limit reached" });
    }

    const resData = await response.json();

    return res.status(200).json({
      status: 200,
      message: "successfully fetched page",
      data: resData,
    });
  } catch (error) {
    console.log(error);
    return res.status.json({ status: 400, message: error });
  }
};

module.exports = {
  getAllCoins,
};
