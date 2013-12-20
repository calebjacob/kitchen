_ = require('lodash');
var express = require('express');
var app = express();
var config = require('./config.js')();
var api = require('./api');
var routes = require('./routes');

// Hook up all of our routes and pass in the API
routes(app, api);

app.listen(config.port);
console.log('There\'s a party going on over at :' + config.port);
console.log(config);
