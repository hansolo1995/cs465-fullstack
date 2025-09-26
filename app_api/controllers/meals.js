/**
 * Author:      Hansol Lee
 * Description: Meals Controller that handles CRUD operations involving meals
 */

const mongoose = require('mongoose')
const Meals = require('../models/meals');
const Model = mongoose.model('meals');

// GET: /meals = retrieves and lists all meals from the database
// Regardless of outcome, response must include HTML status code and JSON message to the requesting client
const mealsList = async(req, res) => {
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

        // Return resulting meals list
        return res
            .status(200)
            .json(q);
    }
};

module.exports = {
    mealsList
}