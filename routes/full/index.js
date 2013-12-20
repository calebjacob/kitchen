module.exports = function(app, api) {
  app.get('/thing', function(req, res) {
    res.send('A full page accessing the API: ' + api.thingy());
  });
};
