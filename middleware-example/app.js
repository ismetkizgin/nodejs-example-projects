require("dotenv/config");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(bodyParser.json());

const middleware = function (req, res, next) {
  console.log("Middleware start..");
  next();
};

app.use(middleware);

app.get("/", middleware, function (req, res) {
  console.log("Router start...");
  res.json("Nodejs Restapi Basic Example");
});

app.listen(PORT, () => {
  console.log("Ready on http://localhost:" + PORT);
});
