const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const { v4: uuid } = require("uuid");
const stripe = require("stripe")(
  "sk_test_51LPfyrSCPAEv6A9QClDfIdBPFq3aOg5tGZ6aJ6Mm1toKpafwKAZ1nUoN2GqLftG2tX5YDthTo4YmEj6AMI6qYxPl00yte73d1o"
);
//uses
const app = express();

app.use(express.json());
app.use(cors());

//TODO:connect to mongoDB

//routes
app.get("/", (req, res) => {
  res.send("<center><h1>Hello, This is backend for stripe API</h1></center>");
});

app.post("/payments", (req, res) => {
  const { user, event, product } = req.body;

  return stripe.customers
    .create({
      email: user.email,
      source: event.id,
    })
    .then((customer) =>
      stripe.charges
        .create(
          {
            customer: customer.id, // set the customer id
            description: product.name,
            receipt_email: user.email,
            amount: parseInt(product.amount / 75), // 25
            currency: "USD",
          },
          { idempotencyKey: uuid() }
        )
        .then((result) => {
          console.log(result);
          res.status(200).json(result);
        })
    )
    .catch((err) => {
      // Deal with an error
      console.log(err);
    });
});

//listen
app.listen(8282, () => console.log("listening at port 8282"));
