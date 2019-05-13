/*
============================================
; Title:  users.js
; Author: Tyler Armstrong
; Date:   12 May 2019
; Description: File for the user database model
;===========================================
*/

// Require statements
const mongoose = require('mongoose');

// User Schema
var userSchema = new mongoose.Schema({
 username: String,
 password: String,
 email: String
});

// Export the model so its publicly available.
module.exports = mongoose.model('User', userSchema);
