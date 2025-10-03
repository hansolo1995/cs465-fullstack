/**
 * Author:      Hansol Lee
 * Description: Proteins Model that defines the database schema for a Protein object
 */

const mongoose = require('mongoose');

// Define parameters for the protein schema
// 'Gene' and 'Ensembl' parameter will allow for indexing in the database
const proteinSchema = new mongoose.Schema({
    Gene: { type: String, required: true, index: true },
    Ensembl: { type: String, required: true, index: true },
    Position: { type: String, required: true },
    Description: { type: String, required: true },
    Chromosome: { type: String, required: true },
    Image: { type: String, required: true },
});

const Protein = mongoose.model('proteins', proteinSchema);
module.exports = Protein;