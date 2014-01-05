module.exports = function(app, config) {
  require('./api')(app, config);
  require('./pages')(app, config);
  require('./partials')(app, config);
};
