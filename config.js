var environment = process.env.NODE_ENV || 'local';
var port = process.env.PORT || 1337;

var globalConfig = {
  port: port,
  environment: environment,
  db: 'localhost:27017/test'
};

var environmentSpecificConfig = {
  production: {
    api: ''
  },
  local: {
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
