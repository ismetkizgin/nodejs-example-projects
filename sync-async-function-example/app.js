require("dotenv/config");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(bodyParser.json());

function logAsync() {
  return new Promise((res, rej) => {
    res("Test");
  });
}

app.get("/", async function (req, res) {
  const response = await logAsync();
  res.json(response);
});

app.get("/then-example", async function (req, res) {
  logAsync().then((response) => {
    res.json(response);
  });
});

app.listen(PORT, () => {
  console.log("Ready on http://localhost:" + PORT);
});
