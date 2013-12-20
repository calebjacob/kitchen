global._ = require('lodash');
var express = require('express');
var app = express();
var config = require('./config.js')();
var request = require('request');
// var routes = require('./routes');

// hook up all of our routes
// routes(app);

app.listen(config.port);
console.log('There\'s a party going on over at :' + config.port);
console.log(config);
