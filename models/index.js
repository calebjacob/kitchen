var mongoose = require('mongoose');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);
var config = require('config');



module.exports = function(app) {
  // Connect to the database:
  
  mongoose.connect(config.databaseUrl);
  var connection = mongoose.connection;

  connection.once('open', function() {
    // Configure session support:

    app.use(session({
      secret: config.sessionSecret,
      resave: true,
      saveUninitialized: true,
      cookie: {
        path: '/',
        httpOnly: true,
        secure: false
      },
      store: new MongoStore({
        url: config.databaseUrl,
        autoReconnect: true
      })
    }));
  });

  connection.on('error', function(error) {
    console.log(error);
  });



  // Return all models in an object

  var models = {};

  models.Example = require('./example.js')(mongoose);

  return models;
};
