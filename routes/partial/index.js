module.exports = function(app, api) {
  app.get('/partial/thing', function(req, res) {
    res.send('A partial accessing the API: ' + api.thingy());
  });
};
