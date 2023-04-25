const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const getAllUsers = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  try {
    await client.connect();
    const db = client.db("CryptoPluie");
    const usersCollection = db.collection("Users");
    const users = await usersCollection.find().toArray();

    if (!users) {
      return res
        .status(404)
        .json({ status: 404, message: "unable to find users" });
    }
    return res.status(200).json({
      status: 200,
      message: "users found",
      data: users,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ status: 400, message: error });
  } finally {
    client.close();
  }
};

module.exports = { getAllUsers };
