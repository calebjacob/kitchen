var express = require('express');
var app = express();
var pkg = require('./package.json');
var session = require('express-session');
var compression = require('compression');
var bodyParser = require('body-parser');
var swig = require('swig');
var config = require('./config.js')();
var helpers = require('./helpers')(app, config);
var models = require('./models')(app, config);
var routes = require('./routes')(app, config, models);



// Configure basic app settings and functionality:

app.use(compression());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static(__dirname + '/public'));



// Configure session support:

app.use(session({
  secret: 'carlos spicy weiner',
  resave: true,
  saveUninitialized: true,
  cookie: {
    path: '/',
    httpOnly: true,
    secure: false
  }
}));



// Configure app to use Swig as default template/render engine:

swig.setDefaults({
  loader: swig.loaders.fs(__dirname + '/views')
});

swig.setTag('icon', helpers.swig.icon.parse, helpers.swig.icon.compile, helpers.swig.icon.ends, helpers.swig.icon.block);

app.engine('swig', swig.renderFile);
app.set('view engine', 'swig');
app.set('views', __dirname + '/views');

console.log(swig.render('{% icon "exclamation" %}'));



// Setting global variables that are always accessible inside of views:

app.locals = {
  config: config,
  pkg: pkg
};



// Run the app:

app.listen(config.port);

console.log('There\'s a party going on over at :' + config.port);
console.log(config);
