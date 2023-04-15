const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const addCoinToHoldings = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);

  const {
    userId,
    coin_id,
    coin_name,
    coin_symbol,
    coin_image,
    coin_quantity,
    coin_purchasePrice,
  } = req.body;

  try {
    await client.connect();
    const db = client.db("CryptoPluie");
    const users = db.collection("Users");
    const user = await users.findOne({ user_id: userId });
    const existingCoin = user.holdings.find(
      (holding) => holding.coin_id === coin_id
    );

    const newBalance = user.balance - coin_purchasePrice * coin_quantity;

    if (newBalance < 0) {
      return res.status(400).json({ status: 400, message: "not enough funds" });
    }

    await users.updateOne(
      { user_id: userId },
      { $set: { balance: newBalance } }
    );

    if (existingCoin) {
      const newCoinQuantity = existingCoin.coin_quantity + coin_quantity;
      const newCoinCostBasis =
        existingCoin.coin_costBasis + coin_purchasePrice * coin_quantity;
      const newCoinAverage = newCoinCostBasis / newCoinQuantity;

      const updatedCoin = {
        ...existingCoin,
        coin_quantity: newCoinQuantity,
        coin_costBasis: newCoinCostBasis,
        coin_averagePrice: newCoinAverage,
        transactions: [
          ...existingCoin.transactions,
          {
            coin_purchasePrice: coin_purchasePrice,
            coin_purchaseQuantity: coin_quantity,
            purchaseDate: new Date().toISOString(),
          },
        ],
      };
      await users.updateOne(
        { user_id: userId, "holdings.coin_id": coin_id },
        { $set: { "holdings.$": updatedCoin } }
      );

      return res
        .status(200)
        .json({ data: updatedCoin, message: "updated existing coin" });
    } else {
      const newCoin = {
        coin_id: coin_id,
        coin_name: coin_name,
        coin_symbol: coin_symbol,
        coin_image: coin_image,
        coin_quantity: coin_quantity,
        coin_averagePrice: coin_purchasePrice,
        coin_costBasis: coin_purchasePrice * coin_quantity,
        transactions: [
          {
            coin_purchasePrice: coin_purchasePrice,
            coin_purchaseQuantity: coin_quantity,
            purchaseDate: new Date().toISOString(),
          },
        ],
      };

      await users.updateOne(
        { user_id: userId },
        { $push: { holdings: newCoin } }
      );
      return res.status(200).json({
        status: 200,
        message: "successfully added a coin",
        data: newCoin,
      });
    }
  } catch (error) {
    console.log(error);
    return res.status.json({ status: 400, message: error });
  } finally {
    client.close();
  }
};

module.exports = {
  addCoinToHoldings,
};
