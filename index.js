// Require all modules to get the app running:

var express = require('express');
var app = express();
var compression = require('compression');
var bodyParser = require('body-parser');
var swig = require('swig-templates');
var package = require('./package.json');
var config = require('./config');
var helpers = require('./helpers');
var routes = require('./routes');
var debug = require('./routes/middleware/debug');



// Configure general app settings and functionality:

app.use(compression());
app.use(express.static(`${__dirname}/public`));
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



// Setting global variables that are always accessible inside of views:

app.locals = {
  package: package
};



// Set up the routes:

routes(app);



// Set up error handling and debug logging:

app.use(debug);



// Run the app:

app.listen(config.port);
console.log(config);



// Export the app:

module.exports = app;
