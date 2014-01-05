module.exports = function(app, config) {
  app.get('/api/thing', function(req, res) {
    res.send({
      "title": "Waffles",
      "description": "Chuck Norris"
    });
  });
};
