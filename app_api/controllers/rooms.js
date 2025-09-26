/**
 * Author:      Hansol Lee
 * Description: Rooms Controller that handles CRUD operations involving rooms
 */

const mongoose = require('mongoose')
const Rooms = require('../models/rooms'); 
const Model = mongoose.model('rooms');

// GET: /rooms = retrieves and lists all rooms from the database
// Regardless of outcome, response must include HTML status code and JSON message to the requesting client
const roomsList = async(req, res) => {
    const q = await Model

        // No filter, return all records
        .find({}) 
        .exec();

        // console.log(q);

    if(!q) {

        // If database returns no data provide error
        return res
            .status(404)
            .json(err);
    }
    else {

        // Return resulting rooms list
        return res
            .status(200)
            .json(q);
    }
};

module.exports = {
    roomsList
}