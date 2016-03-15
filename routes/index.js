module.exports = function(app, config, models) {
  require('./pages')(app, config, models);
  require('./partials')(app, config, models);
};
