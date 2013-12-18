var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send('Waffle!');
});

app.listen(3000);
console.log('There\'s a party going on over at :3000');
