// Import the Mongoose library
const mongoose = require('mongoose');

// Connect to the MongoDB database named "sushie-ordering-app"
mongoose
  .connect('mongodb://localhost:27017/sushie-ordering-app', { useNewUrlParser: true })
  .catch(e => {
    // If there's an error during the connection, log the error message
    console.error('Connection error', e.message);
  });

// Get the Mongoose connection object
const db = mongoose.connection;

// Export the Mongoose connection object so that it can be used in other parts of the application
module.exports = db;
