/**
 * Author:      Hansol Lee
 * Description: Meals Model that defines the database schema for a Meal object
 */

const mongoose = require('mongoose');

// Define parameters for the meal schema
// 'name' parameter will allow for indexing in the database
const mealSchema = new mongoose.Schema({
    type: { type: String, required: true},
    image: { type: String, required: true },
    name: { type: String, required: true, index: true },
    description: { type: String, required: true }
});

const Meal = mongoose.model('meals', mealSchema);
module.exports = Meal;