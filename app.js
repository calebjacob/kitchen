_ = require('lodash');
var express = require('express');
var config = require('./config.js')();
var routes = require('./routes');
var fs = require('fs');
var app = express();

app.use(express.static(__dirname + '/public'));

routes(app);

app.listen(config.port);
console.log('There\'s a party going on over at :' + config.port);
console.log(config);
