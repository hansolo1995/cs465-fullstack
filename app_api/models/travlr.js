/**
 * Author:      Hansol Lee
 * Description: Trips Model that defines the database schema for a Trip object
 */

const mongoose = require('mongoose');

// Define parameters for the trip schema
// 'code' and 'name' parameter will allow for indexing in the database
const tripSchema = new mongoose.Schema({
    code: { type: String, required: true, index: true },
    name: { type: String, required: true, index: true },
    length: { type: String, required: true },
    start: { type: Date, required: true },
    resort: { type: String, required: true },
    perPerson: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true }
});

const Trip = mongoose.model('trips', tripSchema);
module.exports = Trip;