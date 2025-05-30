// Bring in the DB connection and the Trip schema
const Mongoose = require('./db');
const Trip = require('./travlr');

// Read seed data from json file
var fs = require('fs');
var trips = JSON.parse(fs.readFileSync('./data/trips.json', 'utf8'));

// Delete any existing records, then insert seed data
const seedDB = async () => {
    try {
        await Trip.deleteMany({});
        console.log('Deleted Existing Records.');
        await Trip.insertMany(trips);
        console.log('Data Inserted Successfully.');
    } catch (error) {
        console.error('Error: ', error);
    }
};

// Close the MongoDB connection and exit
seedDB().then(async () => {
    await Mongoose.connection.close();
    process.exit(0);
});
