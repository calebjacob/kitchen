module.exports = function(app, config) {
  require('./api')(app, config);
  require('./full')(app, config);
  require('./partial')(app, config);
};
