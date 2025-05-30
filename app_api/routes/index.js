const express = require('express'); // Express app
const router = express.Router();    // Router Logic

// This is where we import the controllers we will route
const tripsController = require('../controllers/trips');

// Define route for our trips endpoint

// GET Method routes tripList
router.route('/trips').get(tripsController.tripsList);

// GET Method routes tripsFindByCode - requires parameter
router.route('/trips/:tripCode').get(tripsController.tripsFindByCode);

module.exports = router;