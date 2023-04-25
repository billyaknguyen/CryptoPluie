const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};


const deleteSuggestion = async (req, res) => {
    const client = new MongoClient(MONGO_URI, options);
    const { userId, suggestion } = req.body;
    try {
      await client.connect();
      const db = client.db("CryptoPluie");
      const users = db.collection("Users");
  
      await users.updateOne(
        { user_id: userId },
        {
          $pull: { suggestions: { _id: suggestion._id } },
        }
      );
  
  
      res.status(200).json({ message: "Suggestion deleted" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal server error" });
    } finally {
      client.close();
    }
  };
  
  module.exports = { deleteSuggestion };