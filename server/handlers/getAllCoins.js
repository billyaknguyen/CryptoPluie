const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const getAllCoins = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  try {
    await client.connect();
    const db = client.db("CryptoPluie");
    // filter the coins by market_cap_rank in ascending order
    const coins = await db.collection("Coins").find().sort({market_cap_rank: 1 }).toArray();

    return res.status(200).json({
      status: 200,
      message: "successfully fetched page",
      data: coins,
    });
  } catch (error) {
    console.log(error);
    return res.status.json({ status: 400, message: error });
  } finally {
    client.close();
  }
};

module.exports = {
  getAllCoins,
};
