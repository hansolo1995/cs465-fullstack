/**
 * Author:      Hansol Lee
 * Description: Command Line script that will insert documents in bulk into a newly created database
 */

// Bring in the DB connection and the desired schema
const Mongoose = require('./db');
const Protein = require('./proteins');

// Read seed data from desired json file
var fs = require('fs');
var proteins = JSON.parse(fs.readFileSync('./data/proteins.json', 'utf8'));

// Delete any existing records, then insert seed data
const seedDB = async () => {
    try {
        await Protein.deleteMany({});
        console.log('Deleted Existing Records.');
        await Protein.insertMany(proteins);
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
