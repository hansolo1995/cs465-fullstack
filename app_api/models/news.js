/**
 * Author:      Hansol Lee
 * Description: News Model that defines the database schema for a News object
 */

const mongoose = require('mongoose');

// Define parameters for the news schema
// 'name' parameter will allow for indexing in the database
const newsSchema = new mongoose.Schema({
    type: { type: String, required: true},
    name: { type: String, required: true, index: true },
});

const News = mongoose.model('news', newsSchema);
module.exports = News;