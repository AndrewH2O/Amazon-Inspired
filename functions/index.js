const functions = require('firebase-functions');
const express = require("express");
const cors = require("cors");
const stripe = require("./stripeApi");
// API


// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json()); // use json data


// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response, next) => {
  // payments from client front end sends /payments/create?total where
  // total is query param (its in sub units e.g. pence)
  // request params are an alternative
  try {
    const total = request.query.total;
    try {
      console.log(`Payment Request Recieved BOOM!!! for this amount >>> ${total} `);
    
      const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // subunits of the currency
        currency: "usd",
      });
    
      // OK - Created
      response.status(201).send({
        clientSecret: paymentIntent.client_secret,
      });
    } catch (error) {
      return response.status(404).send(error.message);
    }
  } catch (error) {
    return next(error)
  }
  

});


// - Listen command
// base url api see axios baseUrl in client
exports.api = functions.https.onRequest(app);


// Example endpoint
// http://localhost:5001/challenge-4b2b2/us-central1/api