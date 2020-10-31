const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.get("/", (req, res) => {
  res.send("Homepage");
});

app.listen(5000, () => {
  console.log("Server running on 5000");
});