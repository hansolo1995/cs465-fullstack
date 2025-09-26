/**
 * Author:      Hansol Lee
 * Description: User Model that defines the database schema for a User object
 */

const mongoose = require('mongoose');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');

// Define parameters for the user schema
// 'email' parameter must be unique, i.e. no duplicates should exist in the database
const userSchema = new mongoose.Schema ({
    email: { type: String, unique: true, required: true },
    name: { type: String, required: true },
    hash: String,
    salt: String,
});

// Securely associate the password to this user object
userSchema.methods.setPassword = function(password) {
    this.salt = crypto.randomBytes(16).toString('hex');
    this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
};

// Method to compare entered password against stored hash
userSchema.methods.validPassword = function(password) {
    var hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
    return this.hash === hash;
};

// Generate a JSON Web Token for a logged in user's current session
userSchema.methods.generateJWT = function() {
    return jwt.sign(
        {

        // Payload for our JSON Web Token
        _id: this._id,
        email: this.email,
        name: this.name
        },

        // SECRET stored in .env file
        process.env.JWT_SECRET,
        {

            // Token expires one hour from creation
            expiresIn: '1h'
        });
};

const User = mongoose.model('users', userSchema);

module.exports = User;