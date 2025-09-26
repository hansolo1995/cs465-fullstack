/**
 * Author:      Hansol Lee
 * Description: Trips Controller that handles CRUD operations involving trips
 */

const mongoose = require('mongoose')
const Trip = require('../models/travlr');
const Model = mongoose.model('trips');

// GET: /trips = retrieves and lists all trips from the database
// Regardless of outcome, response must include HTML status code and JSON message to the requesting client
const tripsList = async(req, res) => {
    const q = await Model

        // No filter, return all records
        .find({}) 
        .exec();

        // console.log(q);

    if(!q) {
        // If database returns no data provide error
        return res
            .status(404)
            .json(err);
    }
    else {
        // Return resulting trips list
        return res
            .status(200)
            .json(q);
    }
};

// GET: /trips/:tripCode = retrieves and lists a single trip
// Regardless of outcome, response must include HTML status code and JSON message to the requesting client
const tripsFindByCode = async(req, res) => {
    const q = await Model
        .find({'code' : req.params.tripCode})
        .exec();

        // console.log(q);

    if(!q) 
    {
        // If database returns no data provide error
        return res
            .status(404)
            .json(err);
    }
    else 
    {
        // Return resulting single trip
        return res
            .status(200)
            .json(q);
    }
};

// POST: /trips - Adds a new Trip object into the database
// Regardless of outcome, response must include HTML status code and JSON message to the requesting client
const tripsAddTrip = async(req, res) => {
    const newTrip = new Trip({
        code: req.body.code,
        name: req.body.name,
        length: req.body.length,
        start: req.body.start,
        resort: req.body.resort,
        perPerson: req.body.perPerson,
        image: req.body.image,
        description: req.body.description
    });

    const q = await newTrip.save();

        if (!q)
        { 
            // If database returns no data provide error
            return res
                .status(400)
                .json(err);
        }
        else 
        {
            // Return the newly created Trip object
            return res
                .status(201)
                .json(q);
        }

        // console.log(q);
}

// PUT: /trips/:tripCode - Updates an existing Trip object in the database
// Regardless of outcome, response must include HTML status code and JSON message to the requesting client
const tripsUpdateTrip = async(req, res) => {

    const q = await Model
        .findOneAndUpdate(
            { 'code' : req.params.tripCode },
            {
                code: req.body.code,
                name: req.body.name,
                length: req.body.length,
                start: req.body.start,
                resort: req.body.resort,
                perPerson: req.body.perPerson,
                image: req.body.image,
                description: req.body.description
            }
        )
        .exec();

        if (!q) 
        {
            // If database returns no data provide error
            return res
                .status(400)
                .json(err);
        }
        else
        {
            // Return resulting updated Trip object
            return res
                .status(201)
                .json(q);
        }
        
        // console.log(q);
}

// DELETE: /trips/:tripCode - Deletes a single existing Trip object in the database
// Regardless of outcome, response must include HTML status code and JSON message to the requesting client
const tripsDeleteTrip = async(req, res) => {

    const q = await Model
        .findOneAndDelete(
            { 'code' : req.params.tripCode }
        )
        .exec();

        if (!q) 
        {
            // If database returns no data provide error
            return res
                .status(400)
                .json(err);
        }
        else
        {
            // Return single deleted Trip object
            return res
                .status(202)
                .json(q);
        }
        
        // console.log(q);
}

module.exports = {
    tripsList,
    tripsFindByCode,
    tripsAddTrip,
    tripsUpdateTrip,
    tripsDeleteTrip
};