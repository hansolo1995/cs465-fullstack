/**
 * Author:      Hansol Lee
 * Description: Contact Router that handles routing to the Contact webpage
 */

var express = require('express');
var router = express.Router();
var controller = require('../controllers/contact');

router.get('/', controller.contact);

module.exports = router;