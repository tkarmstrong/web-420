/*
============================================
; Title:  index.js
; Author: Tyler Armstrong
; Date:   12 May 2019
; Description: Home page router.
;===========================================
*/

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
