/**
 * Author:      Hansol Lee
 * Description: Command Line script that will insert documents in bulk into a newly created database
 */

// Bring in the DB connection and the desired schema
const Mongoose = require('./db');
const New = require('./news');

// Read seed data from desired json file
var fs = require('fs');
var news = JSON.parse(fs.readFileSync('./data/news.json', 'utf8'));

// Delete any existing records, then insert seed data
const seedDB = async () => {
    try {
        await New.deleteMany({});
        console.log('Deleted Existing Records.');
        await New.insertMany(news);
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
