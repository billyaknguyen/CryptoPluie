const { MongoClient } = require("mongodb");
require("dotenv").config();
const cron = require("node-cron");
const { MONGO_URI } = process.env;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
console.log("Starting the coin update ");

const updateCoins = async () => {
  const client = new MongoClient(MONGO_URI, options);
  try {
    await client.connect();

    const db = client.db("CryptoPluie");
    const response = await fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d&locale=en"
    );
    if (response.status === 429) {
      return res.status(429).json({ status: 429, message: "limit reached" });
    }

    const resData = await response.json();

    for (const data of resData) {
      await db.collection("Coins").updateOne(
        {
          id: data.id,
        },
        { $set: data },
        { upsert: false }
      );
    }

    console.log("Coins updated successfully", resData.length);
  } catch (error) {
    console.log(error);
  } finally {
    client.close();
  }
};

cron.schedule("*/15 * * * *", updateCoins);

updateCoins();
