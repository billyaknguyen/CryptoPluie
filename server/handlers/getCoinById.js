const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const getCoinById = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  try {
    const { id } = req.params;
    await client.connect();
    const db = client.db("CryptoPluie");
    const coin = await db.collection("Coins").findOne({ id });

    if (coin) {
      return res.status(200).json({
        status: 200,
        message: "successfully fetched coin",
        data: coin,
      });
    } else {
      return res
        .status(404)
        .json({ status: 404, message: "unable to find coin" });
    }
  } catch (error) {
    console.log(error);
    return res.status.json({ status: 400, message: error });
  } finally {
    client.close();
  }
};

module.exports = { getCoinById };
