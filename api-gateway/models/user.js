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
const User = module.exports = mongoose.model('User', userSchema);

// user.save is used to add a new user in our database
module.exports.add = (user, callback) => {
  user.save(callback);
}

// Look up by id
module.exports.getById = (id, callback) => {
  var query = {_id: id};
  User.findById(query, callback);
}

// Look up by email
module.exports.getOne = (e, callback) => {
  var query = {email: e};
  User.findOne(query, callback);
};