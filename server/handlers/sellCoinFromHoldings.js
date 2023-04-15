const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const sellCoinFromHoldings = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  const { userId, coin_id, coin_quantity, coin_salePrice } = req.body;
  try {
    await client.connect();
    const db = client.db("CryptoPluie");
    const users = db.collection("Users");
    const user = await users.findOne({ user_id: userId });
    const existingCoin = user.holdings.find(
      (holding) => holding.coin_id === coin_id
    );

    if (!existingCoin) {
      return res.status(400).json({
        status: 400,
        message: "unable to find coin",
      });
    }
    const newCoinQuantity = existingCoin.coin_quantity - coin_quantity;

    if (newCoinQuantity < 0) {
      return res
        .status(400)
        .json({ status: 400, message: "not enough coin to sell" });
    }

    //Balance
    const newBalance = user.balance + coin_quantity * coin_salePrice;
    await users.updateOne(
      { user_id: userId },
      { $set: { balance: newBalance } }
    );

    const newCoinCostBasis =
      existingCoin.coin_costBasis -
      coin_quantity * existingCoin.coin_averagePrice;
    const updatedCoin = {
      ...existingCoin,
      coin_quantity: newCoinQuantity,
      coin_costBasis: newCoinCostBasis,
      transactions: [
        ...existingCoin.transactions,
        {
          coin_salePrice: coin_salePrice,
          coin_saleQuantity: coin_quantity,
          saleDate: new Date().toISOString(),
        },
      ],
    };

    if (newCoinQuantity === 0) {
      await users.updateOne(
        { user_id: userId },
        { $pull: { holdings: { coin_id: coin_id } } }
      );
      return res
        .status(200)
        .json({ status: 200, message: "successfully sold all coins" });
    } else {
      await users.updateOne(
        { user_id: userId, "holdings.coin_id": coin_id },
        { $set: { "holdings.$": updatedCoin } }
      );
      return res.status(200).json({
        status: 200,
        message: `successfully sold ${coin_quantity}`,
        data: updatedCoin,
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
  sellCoinFromHoldings,
};
