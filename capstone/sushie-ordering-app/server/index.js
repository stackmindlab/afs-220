// Import required modules and setup the application
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

// Connect to the database
const db = require('./db');

// Initialize Express app and import routers
const app = express();
const productRouter = require('./routes/productRouter');
const userRouter = require('./routes/productRouter');

// Import Order model and configuration file

// Import and initialize Stripe with the secret key

// Set CORS configuration
var corsOptions = {
    origin: "http://localhost:3000"
}

// Function to calculate the total order amount based on order items

// Use the CORS middleware with specified options
app.use(cors(corsOptions));

// Use body-parser to parse incoming JSON and URL-encoded data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Use another CORS middleware for handling Stripe webhook events


 // We need the raw body to verify webhook signatures.
// Let's compute it only when hitting the Stripe webhook endpoint.

// Expose an endpoint as a webhook handler for asynchronous events.
// Configure your webhook in the Stripe developer dashboard
// https://dashboard.stripe.com/test/webhooks

// Check if webhook signing is configured.

// Retrieve the event by verifying the signature using the raw body and secret.

// Webhook signing is recommended, but if the secret is not configured in `config.js`,
// we can retrieve the event data directly from the request body.


// Funds have been captured
// Fulfill any orders, e-mail receipts, etc
// To cancel the payment after capture you will need to issue a Refund (https://stripe.com/docs/api/refunds)

// Handle MongoDB connection error
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

// Define a simple root route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to Sushie Ordering"});
});

// Set the server port and start listening
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
app.use('/api/', productRouter);


// Mount routers to handle related routes

// Endpoint to create a payment intent for Stripe payments

// await order.save();

