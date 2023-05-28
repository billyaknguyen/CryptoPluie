const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// function to decline a suggestion from another user
const declineSuggestion = async (req, res) => {
    const client = new MongoClient(MONGO_URI, options);
    const { userId, suggestion } = req.body;
    try {
      await client.connect();
      const db = client.db("CryptoPluie");
      const users = db.collection("Users");
  
      // removes the suggestion from the pendingSuggestions
      await users.updateOne(
        { user_id: userId },
        {
          $pull: { pendingSuggestions: { _id: suggestion._id } },
        }
      );
      
  // updates the sender's suggestion's status to declined in their suggestion history
    await users.updateOne (
      {
        user_id: suggestion.sender.sender_id,
        suggestionHistory: {
          $elemMatch: {
            _id: suggestion._id
          }
        }
      },
      {
        $set: {
          "suggestionHistory.$.status" : "declined",
        }
      }
    )
  
      res.status(200).json({ message: "Suggestion declined" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal server error" });
    } finally {
      client.close();
    }
  };

  module.exports = {declineSuggestion}