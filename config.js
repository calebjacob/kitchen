var fs = require('fs');

var environment = process.env.NODE_ENV || 'development';
var port = process.env.PORT || 3000;

var globalConfig = {
  port: port,
  environment: environment
};

var environmentSpecificConfig = {
  production: {
    api: ''
  },
  development: {
    api: 'http://localhost:' + port + '/api'
  }
};

/* Grab any secrets
var secrets = require('./secrets');
var globalSecrets = secrets.global;
var environmentSpecificSecrets = secrets[environment];
globalConfig.secrets = _.merge(globalSecrets, environmentSpecificSecrets); */

module.exports = function() {
  return _.merge(globalConfig, environmentSpecificConfig[environment]);
};
