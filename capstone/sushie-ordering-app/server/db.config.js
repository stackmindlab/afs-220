// The name of the MongoDB database used by the sushi ordering app
const dbName = 'sushie-ordering-app';

// The host where the MongoDB server is running (usually 'localhost' for local development)
const dbHost = 'localhost';

// The port number on which the MongoDB server is listening (default is 27017)
const dbPort = 27017;

// Exporting the MongoDB connection URL as a module
// The URL is constructed using the dbName, dbHost, and dbPort variables
module.exports = {
    url: `mongodb://${dbHost}:${dbPort}/${dbName}`
}

// In summary, this code exports the MongoDB connection URL as a module, 
// which includes the database name (sushie-ordering-app), 
// the host where the MongoDB server is running (localhost), 
// and the port number used by the MongoDB server (27017). 
// This URL is then used to establish a connection with the MongoDB database for the sushi ordering app.