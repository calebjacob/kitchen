module.exports = function(app) {
  app.get('/partial/thing', function(req, res) {
    res.send('A partial');
  });
};
