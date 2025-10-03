/**
 * Author:      Hansol Lee
 * Description: Proteins Router that handles routing to the Proteins webpage
 */

var express = require('express');
var router = express.Router();
var controller = require('../controllers/proteins');

router.get('/', controller.proteins);

module.exports = router;