/**
 * Author:      Hansol Lee
 * Description: News Router that handles routing to the News webpage
 */

var express = require('express');
var router = express.Router();
var controller = require('../controllers/news');

router.get('/', controller.news);

module.exports = router;