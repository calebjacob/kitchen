_ = require('lodash');
var express = require('express');
var config = require('./config.js')();
var routes = require('./routes');
var cons = require('consolidate');
var fs = require('fs');
var deviceDetection = require('ua-parser');
var app = express();

app.engine('dust', cons.dust);

app.set('view engine', 'dust');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + '/public'));

routes(app, config);

app.listen(config.port);
console.log('There\'s a party going on over at :' + config.port);
console.log(config);
