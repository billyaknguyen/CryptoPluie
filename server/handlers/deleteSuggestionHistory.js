const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// a function to delete suggestions from the user's suggestion history
const deleteSuggestionHistory = async (req, res) => {
    const client = new MongoClient(MONGO_URI, options);
    const { userId, suggestionHistory } = req.body;
    try {
      await client.connect();
      const db = client.db("CryptoPluie");
      const users = db.collection("Users");
  
      await users.updateOne(
        { user_id: userId },
        {
          $pull: { suggestionHistory: { _id: suggestionHistory._id } },
        }
      );
  
  
      res.status(200).json({ message: "SuggestionHistory  deleted" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal server error" });
    } finally {
      client.close();
    }
  };
  
  module.exports = { deleteSuggestionHistory };