module.exports = function(app, config, models) {
  app.get('/partials/example', function(req, res) {
    res.render('partials/example');
  });
};
