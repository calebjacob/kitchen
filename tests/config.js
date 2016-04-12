// Set up some useful global variables for our tests:

appRoot = __dirname.replace('/tests', '');
requireAppRoot = function(name) {
  return require(`${appRoot}/${name}`);
};
expect = require('chai').expect;
sinon = require('sinon');
nodeMocksHttp = require('node-mocks-http');
models = {};
helpers = requireAppRoot('helpers');



// Mock out Mongoose and require models:

before(function(done) {
  var Mongoose = require('mongoose').Mongoose;
  var mongoose = new Mongoose();
  mongoose.Promise = Promise;
  var mockgoose = require('mockgoose');
  var config = requireAppRoot('config');

  mockgoose(mongoose)
    .then(function() {
      mongoose.connect(config.databaseUrl, function(error) {
        models = requireAppRoot('models')(mongoose);
        done(error);
      });
    });
});
