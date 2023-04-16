const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const getUserData = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  const { userId } = req.params;
  try {
    await client.connect();
    const db = client.db("CryptoPluie");
    const users = db.collection("Users");
    const user = await users.findOne({ user_id: userId });

    if (!user) {
      return res
        .status(404)
        .json({ status: 404, message: "unable to find user" });
    }
    return res.status(200).json({
      status: 200,
      message: "user found",
      data: { holdings: user.holdings, balance: user.balance },
    });
  } catch (error) {
    console.log(error);
    return res.status.json({ status: 400, message: error });
  } finally {
    client.close();
  }
};

module.exports = { getUserData };
