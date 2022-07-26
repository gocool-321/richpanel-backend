const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const { validate, writeToDB } = require("./validators");
const e = require("express");
const port = 5000;

app.use(bodyParser.json());
app.use(cors());

mongoose
  .connect(
    "mongodb+srv://gokulsai:gokul@stripeapp.tjrx9.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  )
  .then(() => console.log("Connected to MongoDB"));

app.get("/login", (req, res) => {
  console.log(req.body);
  res.send("ok");
});

app.post("/signup", (req, res) => {
  console.log(req.body);
  writeToDB(req.body);
  res.send("ok");
});

app.post("/login", (req, res) => {
  const r = validate(req.body);
  console.log(r);
  //   if (r.password === req.body.password) {
  //     res.send("ok");
  //   } else {
  //     res.send("not ok");
  //   }
});

app.listen(port, () => {
  console.log("Server started on port 5000");
});
