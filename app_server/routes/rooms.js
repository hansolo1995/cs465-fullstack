/**
 * Author:      Hansol Lee
 * Description: Rooms Router that handles routing to the About webpage
 */

var express = require('express');
var router = express.Router();
var controller = require('../controllers/rooms');

router.get('/', controller.rooms);

module.exports = router;