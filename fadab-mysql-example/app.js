require("dotenv/config");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { insertAsync, selectAsync } = require("fadab-mysql-helper");

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get("/users", async (req, res) => {
  try {
    const users = await selectAsync("users");
    res.json(users);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

app.post("/user", async (req, res) => {
  try {
    const users = await insertAsync("users", req.body);
    res.json(users);
  } catch (err) {
    res.status(500).json(err);
  }
});

app.listen(PORT, () => {
  console.log("Ready on http://localhost:" + PORT);
});
