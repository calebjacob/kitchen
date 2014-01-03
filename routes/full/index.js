module.exports = function(app) {
  app.get('/thing', function(req, res) {
    res.send('A full page');
  });
};
