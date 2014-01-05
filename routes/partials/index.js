module.exports = function(app, config) {
  app.get('/partials/thing', function(req, res) {
    res.render('partials/thing');
  });
};
