require("dotenv/config");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get("/", function (req, res) {
  res.json("Nodejs Restapi Basic Example");
});

app.listen(PORT, () => {
  console.log("Ready on http://localhost:" + PORT);
});
