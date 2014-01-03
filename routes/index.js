module.exports = function(app) {
  require('./api')(app);
  require('./full')(app);
  require('./partial')(app);
};
