const express = require("express");
const morgan = require("morgan");
const app = express();
const port = 3000;
const { getAllCoins } = require("./handlers/getAllCoins");
app.use(morgan("tiny"));
app.use(express.json());

app.get("/api/coins", getAllCoins);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
