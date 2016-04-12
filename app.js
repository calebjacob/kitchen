// Add support for easily require()'ing local modules:

var appModulePath = require('app-module-path');
appModulePath.addPath(__dirname);



// Require all modules to get the app running:

var express = require('express');
var mongoose = require('mongoose');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);
var app = express();
var pkg = require('./package.json');
var compression = require('compression');
var bodyParser = require('body-parser');
var swig = require('swig');
var config = require('config');
var helpers = require('helpers');
var models = require('models')(mongoose);
var routes = require('routes')(app, models);



// Configure general app settings and functionality:

app.use(express.static(`${__dirname}/public`));
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));



// Configure app to use Swig as default template/render engine:

swig.setDefaults({
  loader: swig.loaders.fs(`${__dirname}/views`)
});
swig.setTag('icon', helpers.swigIconTag.parse, helpers.swigIconTag.compile, helpers.swigIconTag.ends, helpers.swigIconTag.block);
app.engine('swig', swig.renderFile);
app.set('view engine', 'swig');
app.set('views', `${__dirname}/views`);



// Configure Mongoose and connect to the database:
  
mongoose.Promise = Promise;
mongoose.connect(config.databaseUrl);
mongoose.connection.once('open', function() {
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

mongoose.connection.on('error', function(error) {
  console.log(error);
});



// Setting global variables that are always accessible inside of views:

app.locals = {
  config: config,
  pkg: pkg
};



// Run the app:

app.listen(config.port);

console.log(`There's a party going on over on port :${config.port}`);
console.log(config);



// Export the app:

module.exports = app;
