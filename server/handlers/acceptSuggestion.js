const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// function to accept a suggestion from another user
const acceptSuggestion = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  const { userId, suggestion } = req.body;
  try {
    await client.connect();
    const db = client.db("CryptoPluie");
    const users = db.collection("Users");

    const updatedSuggestion = {
      ...suggestion, 
      status: "accepted"
    }
    // removes the pending suggestion and add the updated suggestion to suggestions
    await users.updateOne(
      { user_id: userId },
      {
        $pull: { pendingSuggestions: { _id: suggestion._id } },
        $push: { suggestions: updatedSuggestion },
      }
    );

    // updates the sender's suggestion's status to accepted in their suggestion history
    await users.updateOne(
      {
        user_id: suggestion.sender.sender_id,
        suggestionHistory: {
          $elemMatch: {
            _id: suggestion._id,
          },
        },
      },
      {
        $set: {
          "suggestionHistory.$.status": "accepted",
        },
      }
    );

    res.status(200).json({ message: "Suggestion accepted" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  } finally {
    client.close();
  }
};

module.exports = { acceptSuggestion };
