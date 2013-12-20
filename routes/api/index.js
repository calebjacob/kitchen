module.exports = function(app, api) {
  app.get('/api/method', function(req, res) {
    res.send('Accessing the API directly: ' + api.thingy());
  });
};
