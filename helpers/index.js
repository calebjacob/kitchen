module.exports = function(app, config) {
  var helpers = {};

  helpers.swig = {
    icon: require('./swig/icon.js')
  };

  return helpers;
};
