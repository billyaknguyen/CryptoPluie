const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const batchImport = async () => {
  const client = new MongoClient(MONGO_URI, options);
  try {
    await client.connect();

    const db = client.db("CryptoPluie");
    const response = await fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d&locale=en"
    );
    const resData = await response.json();

    const coinsData = resData.map((coin) => {
      return {
        ...coin,
        _id: coin.id,
      };
    });

    const result = await db.collection("Coins").insertMany(coinsData);

    client.close;

    console.log("Coins imported successfully", result);
  } catch (error) {
    console.log(error);
  }
};

batchImport();
