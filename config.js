// set up global and environment specific configurations

var environment = process.env.NODE_ENV || 'development';

var environmentSpecificConfig = {
  production: {},
  development: {}
};

var globalConfig = {
  port: process.env.PORT || 3000,
  environment: environment
};

module.exports = function() {
  return _.merge(globalConfig, environmentSpecificConfig[environment]);
};
