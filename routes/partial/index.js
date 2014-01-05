module.exports = function(app, config) {
  app.get('/partial/thing', function(req, res) {
    res.send('A partial');
  });
};
