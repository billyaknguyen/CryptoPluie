const { MongoClient } = require("mongodb");
const { v4: uuidv4 } = require('uuid');
require("dotenv").config();
const { MONGO_URI } = process.env;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const suggestCoin = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  const {loggedInUser, userId, messageData } = req.body;
  try {
    await client.connect();
    const db = client.db("CryptoPluie");
    const users = db.collection("Users");
    const user = await users.findOne({ user_id: userId });

    if (!user) {
      return res.status(404).json({ message: "user not found" });
    }

    const messageDataWithId = {
      ...messageData, 
      _id: uuidv4()
    }

    await users.updateOne(
      { user_id: userId },
      { $push: { pendingSuggestions: messageDataWithId } }
    );

    await users.updateOne({user_id: loggedInUser}, {$push: {suggestionHistory : messageDataWithId}})

    return res
      .status(200)
      .json({ status: 200, message: "suggested coin", data: messageData });
  } catch (error) {
    console.log(error);
  } finally {
    client.close();
  }
};

module.exports = { suggestCoin };
