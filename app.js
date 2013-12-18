_ = require('lodash');
var express = require('express');
var app = express();
var config = require('./config.js')();

app.get('/', function(req, res) {
  res.send('Waffle!');
});

app.listen(config.port);
console.log('There\'s a party going on over at :' + config.port);
console.log(config);
