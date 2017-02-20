var environment = process.env.NODE_ENV || 'local';
var port = process.env.PORT || '1337';

var globalConfig = {
  port: port,
  environment: environment
};

var environmentSpecificConfig = {
  local: {},
  production: {}
};

var config = Object.assign(globalConfig, environmentSpecificConfig[environment]);



module.exports = config;
