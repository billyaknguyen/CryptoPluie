const express = require("express");
const morgan = require("morgan");
const app = express();
const port = 3000;
const { getAllCoins } = require("./handlers/getAllCoins");
const { getCoinById } = require("./handlers/getCoinById");
const { addCoinToHoldings } = require("./handlers/addCoinToHoldings");
const { sellCoinFromHoldings } = require("./handlers/sellCoinFromHoldings");
const { getUserData } = require("./handlers/getUserData");
const { suggestCoin } = require("./handlers/suggestCoin");
const { getAllUsers } = require("./handlers/getAllUsers");
const {acceptSuggestion} = require("./handlers/acceptSuggestion")
const {declineSuggestion} = require("./handlers/declineSuggestion")
const {deleteSuggestion} = require("./handlers/deleteSuggestion")
const {deleteSuggestionHistory} = require("./handlers/deleteSuggestionHistory")

app.use(morgan("tiny"));
app.use(express.json());

app.get("/api/coins", getAllCoins);
app.get("/api/coin/:id", getCoinById);
app.get("/api/user/:userId", getUserData);
app.get("/api/users", getAllUsers);
app.post("/api/addCoin", addCoinToHoldings);
app.post("/api/sellCoin", sellCoinFromHoldings);
app.post("/api/suggestCoin", suggestCoin);
app.post("/api/acceptSuggestion", acceptSuggestion);
app.post("/api/declineSuggestion", declineSuggestion);
app.delete("/api/deleteSuggestion", deleteSuggestion);
app.delete("/api/deleteSuggestionHistory", deleteSuggestionHistory);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
