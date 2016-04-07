var environment = process.env.NODE_ENV || 'local';
var port = process.env.PORT || 1337;

var globalConfig = {
  port: port,
  environment: environment
};

var environmentSpecificConfig = {
  production: {
    databaseUrl: '',
    sessionSecret: ''
  },

  local: {
    databaseUrl: 'mongodb://localhost:27017/test',
    sessionSecret: 'carlos spicy weiner'
  }
};

var config = Object.assign(globalConfig, environmentSpecificConfig[environment]);



module.exports = config;
