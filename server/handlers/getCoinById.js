const getCoinById = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await fetch(
      `https://api.coingecko.com/api/v3/coins/${id}?localization=false&tickers=false&market_data=false&community_data=false&developer_data=false&sparkline=false`
    );
    if (response.status === 429) {
      return res.status(429).json({ status: 429, message: "limit reached" });
    }
    const resData = await response.json();
    return res.status(200).json({
      status: 200,
      message: "successfully fetched coin",
      data: resData,
    });
  } catch (error) {
    return res.status(400).json({ status: 400, message: error });
  }
};

module.exports = { getCoinById };
