const express = require("express");
const morgan = require("morgan");
const app = express();
const port = 3000;
const { getAllCoins } = require("./handlers/getAllCoins");
const { getCoinById } = require("./handlers/getCoinById");
app.use(morgan("tiny"));
app.use(express.json());

app.get("/api/coins", getAllCoins);
app.get("/api/coin/:id", getCoinById);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
