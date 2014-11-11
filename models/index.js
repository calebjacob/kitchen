module.exports = function(app, config) {
  var mongoose = require('mongoose');



  // Connect to the database
  
  mongoose.connect(config.db);
  var connection = mongoose.connection;

  connection.on('error', function(error) {
    console.log(error);
  });

  connection.once('open', function() {
    console.log('Mongo is a go!');
  });



  // Return all models in an object

  var models = {};

  models.Example = require('./example.js')(mongoose);

  return models;
};
