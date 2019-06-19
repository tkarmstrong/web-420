/*
============================================
; Title:  api-catalog.js
; Author: Tyler Armstrong
; Date:   12 May 2019
; Description: Catalog router.
;===========================================
*/

/**
* API Routes
*/
var express = require('express');
var router = express.Router();
var auth_controller = require('../controllers/authController');

// POST request for registering a user
router.post('/auth/register', auth_controller.user_register);

// GET request for verifying user tokens
router.get('/auth/token', auth_controller.user_token);
module.exports = router;

// POST user login request
router.post('/auth/login', auth_controller.user_login);

// GET user logout request
router.get('/auth/logout', auth_controller.user_logout);