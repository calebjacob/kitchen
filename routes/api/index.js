module.exports = function(app) {
  app.get('/api/thing', function(req, res) {
    res.send({
      "food": "waffle",
      "car": "mustang"
    });
  });
};
