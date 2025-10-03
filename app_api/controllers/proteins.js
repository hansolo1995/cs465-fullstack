/**
 * Author:      Hansol Lee
 * Description: Proteins Controller that handles CRUD operations involving proteins
 */

const mongoose = require('mongoose')
const Protein = require('../models/proteins'); 
const Model = mongoose.model('proteins');

// GET: /proteins = retrieves and lists all proteins from the database
// Regardless of outcome, response must include HTML status code and JSON message to the requesting client
const proteinsList = async(req, res) => {
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

        // Return resulting proteins list
        return res
            .status(200)
            .json(q);
    }
};

// GET: /proteins/Gene = retrieves and lists a single protein
// Regardless of outcome, response must include HTML status code and JSON message to the requesting client
const proteinsFindByGene = async(req, res) => {
    const q = await Model
        .find({ 'Gene' : req.params.Gene })
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
        // Return resulting single protein
        return res
            .status(200)
            .json(q);
    }
};

// POST: /proteins - Adds a new Protein object into the database
// Regardless of outcome, response must include HTML status code and JSON message to the requesting client
const proteinsAddProtein = async(req, res) => {
    const newProtein = new Protein ({
        Gene: req.body.Gene,
        Ensembl: req.body.Ensembl,
        Position: req.body.Position,
        Description: req.body.Description,
        Chromosome: req.body.Chromosome,
        Image: req.body.Image
    });

    const q = await newProtein.save();

        if (!q)
        { 
            // If database returns no data provide error
            return res
                .status(400)
                .json(err);
        }
        else 
        {
            // Return the newly created Protein object
            return res
                .status(201)
                .json(q);
        }

        // console.log(q);
}

// PUT: /proteins/:Gene - Updates an existing Protein object in the database
// Regardless of outcome, response must include HTML status code and JSON message to the requesting client
const proteinsUpdateProtein = async(req, res) => {

    const q = await Model
        .findOneAndUpdate(
            { 'Gene' : req.params.Gene },
            {
                Gene: req.body.Gene,
                Ensembl: req.body.Ensembl,
                Position: req.body.Position,
                Description: req.body.Description,
                Chromosome: req.body.Chromosome,
                Image: req.body.Image
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
            // Return resulting updated Protein object
            return res
                .status(201)
                .json(q);
        }
        
        // console.log(q);
}

// DELETE: /proteins/:Gene - Deletes a single existing Protein object in the database
// Regardless of outcome, response must include HTML status code and JSON message to the requesting client
const proteinsDeleteProtein = async(req, res) => {

    const q = await Model
        .findOneAndDelete(
            { 'Gene' : req.params.Gene }
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
            // Return single deleted Protein object
            return res
                .status(202)
                .json(q);
        }
        
        // console.log(q);
}

module.exports = {
    proteinsList,
    proteinsFindByGene,
    proteinsAddProtein,
    proteinsUpdateProtein,
    proteinsDeleteProtein
};