module.exports = function(app, config) {
  app.get('/api/thing', function(req, res) {
    res.send({
      "food": "wafflezzz",
      "car": "mustang"
    });
  });
};
