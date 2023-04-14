const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const addCoinToHoldings = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);

  const { userId, coin } = req.body;

  try {
    await client.connect();
    const db = client.db("CryptoPluie");
    const users = db.collection("Users");
    await users.updateOne({ user_id: userId }, { $push: { holdings: coin } });
    client.close;

    return res.status(200).json({
      status: 200,
      message: "successfully added a coin",
      data: coin,
    });
  } catch (error) {
    console.log(error);
    return res.status.json({ status: 400, message: error });
  }
};

module.exports = {
  addCoinToHoldings,
};
