var express = require('express');
var app = express();
var pkg = require('./package.json');
var session = require('express-session');
var compression = require('compression');
var bodyParser = require('body-parser');
var swig = require('swig');
var config = require('./config.js')();
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

swig.setTag('icon', function (str, line, parser, types, options, swig) {
  parser.on(types.STRING, function (token) {
    var string = token.match.replace(/["']/g, '');
    this.out.push(string);
  });

  return true;
}, function (compiler, args, content, parents, options, blockName) {
  console.log(args[0]);

  return '_output = "<svg></svg>";';
}, false, false);

app.engine('swig', swig.renderFile);
app.set('view engine', 'swig');
app.set('views', __dirname + '/views');

console.log(swig.render('{% icon "broncos" %}'));





// Setting global variables that are always accessible inside of views:

app.locals = {
  config: config,
  pkg: pkg
};



// Configure all routes:

// routes(app, config);



// Run the app:

app.listen(config.port);

console.log('There\'s a party going on over at :' + config.port);
console.log(config);
