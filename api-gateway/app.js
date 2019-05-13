/*
============================================
; Title:  Assignment 2.3 - API Gateway Part II
; Author: Tyler Armstrong
; Date:   12 May 2019
; Modified By: N/A
; Description: Showcases RESTful API
;===========================================
*/

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var apiCatalog = require('./routes/api-catalog');

var indexRouter = require('./routes/index');

// Connect to DB
const mongoDB = "mongodb+srv://admin:admin@ems-qmc0r.mongodb.net/api-gateway?retryWrites=true";
mongoose.connect(mongoDB, {
  useNewUrlParser: true
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connected error: "));
db.once("open", function() {
  console.log("Application connected to Atlas MongoDB instance");
});

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/api', apiCatalog); 
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
