require("dotenv").config();
const express = require("express");

const mongoose = require("mongoose");
const BankModel = require("./models/bank.models");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const options = { useNewUrlParser: true, useUnifiedTopology: true };
// mongoose.conn

async function mongoConnect() {
  await mongoose.connect(process.env.MONGODB_URL, options, () =>
    console.log("connected to db")
  );
}

app.post("/post", async (req, res) => {
  try {
    const bank = new BankModel({ name: req.body.Banck });
    await bank.save();
    res.status(201).send({
      message: "bank created",
    });
  } catch (error) {
    res.status(500).send({
      message: `error : ${error.message}`,
    });
  }
});

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`App listening at http://localhost:${process.env.PORT}`),
    mongoConnect();
});
