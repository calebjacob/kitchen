var fs = require('fs');

var environment = process.env.NODE_ENV || 'development';

var environmentSpecificConfig = {
  production: {},
  development: {}
};

var globalConfig = {
  port: process.env.PORT || 3000,
  environment: environment
};

if (fs.existsSync(__dirname + '/secrets.json')) {
  var secrets = require('./secrets');
  var globalSecrets = secrets.global;
  var environmentSpecificSecrets = secrets[environment];
  globalConfig.secrets = _.merge(globalSecrets, environmentSpecificSecrets);
}

module.exports = function() {
  return _.merge(globalConfig, environmentSpecificConfig[environment]);
};
