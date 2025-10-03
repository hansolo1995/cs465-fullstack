/**
 * Author:      Hansol Lee
 * Description: General Router that holds all routers used in the Travlr application
 */

const express = require('express');  
const router = express.Router();     
const jwt = require('jsonwebtoken');

// Imported controllers that will be routed
const tripsController = require('../controllers/trips');
const roomsController = require('../controllers/rooms');
const mealsController = require('../controllers/meals');
const newsController = require('../controllers/news');
const proteinsController = require('../controllers/proteins');
const authController = require('../controllers/authentication');
const { proteins } = require('../../app_server/controllers/proteins');

// Define route for authentication and login endpoints
router.route('/register').post(authController.register);
router.route('/login').post(authController.login);


// Define routes for trips, rooms, meals, and news endpoints
router
    .route('/trips')
    .get(tripsController.tripsList) 
    .post(authenticateJWT, tripsController.tripsAddTrip); 

router
    .route('/rooms')
    .get(roomsController.roomsList);

router
    .route('/meals')
    .get(mealsController.mealsList);

router
    .route('/news')
    .get(newsController.newsList);

router
    .route('/proteins')
    .get(proteinsController.proteinsList)
    .post(authenticateJWT, proteinsController.proteinsAddProtein);

// GET Method routes tripsFindByCode - requires parameter
// PUT Method routes tripsUpdateTrip - requires parameter
// DELETE Method routes tripsDeleteTrip - requires parameter
router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindByCode)
    .put(authenticateJWT, tripsController.tripsUpdateTrip)
    .delete(tripsController.tripsDeleteTrip);

router
    .route('/proteins/:Gene')
    .get(proteinsController.proteinsFindByGene)
    .put(authenticateJWT, proteinsController.proteinsUpdateProtein)
    .delete(proteinsController.proteinsDeleteProtein);

function authenticateJWT(req, res, next) {
    console.log("In Middleware");

    const authHeader = req.headers['authorization'];
    console.log("Auth Header: " + authHeader);

    if (authHeader == null) {
        console.log('Auth Header Required but NOT PRESENT!');
        return res.sendStatus(401);
    }

    let headers = authHeader.split(' ');
    if (headers.length < 1) {
        console.log('Not enough tokens in Auth Header: ' + headers.length);
        return res.sendStatus(501);
    }

    const token = authHeader.split(' ')[1];
    console.log("Token: " + token);

    if (token == null) {
        console.log('Null Bearer Token');
        return res.sendStatus(401);
    }

    console.log(process.env.JWT_SECRET);
    console.log(jwt.decode(token));
    
    const verified = jwt.verify(token, process.env.JWT_SECRET, (err, verified) => {
        if (err) {
            return res.sendStatus(401).json('Token Validation Error!');
        }
        // Set the auth parameter to the decoded object
        req.auth = verified;
    });
    // Continue or this will hang forever
    next (); 
}

module.exports = router;