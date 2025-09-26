/**
 * Author:      Hansol Lee
 * Description: News Controller that handles CRUD operations involving news
 */

const mongoose = require('mongoose')
const News = require('../models/news'); 
const Model = mongoose.model('news');

// GET: /news = retrieves and lists all news from the database
// Regardless of outcome, response must include HTML status code and JSON message to the requesting client
const newsList = async(req, res) => {
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

        // Return resulting news list
        return res
            .status(200)
            .json(q);
    }
};

module.exports = {
    newsList
}