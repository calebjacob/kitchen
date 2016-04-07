module.exports = function(router, models) {
  router.get('/partials/example', function(req, res) {
    res.render('partials/example');
  });
};
