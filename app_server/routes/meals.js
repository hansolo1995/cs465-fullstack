/**
 * Author:      Hansol Lee
 * Description: Meals Router that handles routing to the Meals webpage
 */

var express = require('express');
var router = express.Router();
var controller = require('../controllers/meals');

router.get('/', controller.meals);

module.exports = router;