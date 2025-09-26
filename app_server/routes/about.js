/**
 * Author:      Hansol Lee
 * Description: About Router that handles routing to the About webpage
 */

var express = require('express');
var router = express.Router();
var controller = require('../controllers/about');

router.get('/', controller.about);

module.exports = router;