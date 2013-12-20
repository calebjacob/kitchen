module.exports = function(app, api) {
  require('./api')(app, api);
  require('./full')(app, api);
  require('./partial')(app, api);
};
