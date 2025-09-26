/**
 * Author:      Hansol Lee
 * Description: Home Router that handles routing to the Home webpage
 */

var express = require('express');
var router = express.Router();
const controller = require('../controllers/main');

router.get('/', controller.index);

module.exports = router;
