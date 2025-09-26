/**
 * Author:      Hansol Lee
 * Description: Rooms Model that defines the database schema for a Room object
 */

const mongoose = require('mongoose');

// Define parameters for the room schema
// 'name' parameter will allow for indexing in the database
const roomSchema = new mongoose.Schema({
    name: { type: String, required: true, index: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
    rate: { type: String, required: true }
});

const Room = mongoose.model('rooms', roomSchema);
module.exports = Room;