// set up global and environment specific configurations

var globalConfig = {
  port: process.env.PORT || 3000
};

var environment = process.env.NODE_ENV || 'development';

var environmentSpecificConfig = {
  production: {},
  development: {}
};

module.exports = function() {
  return _.merge(globalConfig, environmentSpecificConfig[environment]);
};
