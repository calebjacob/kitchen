module.exports = function(app, config) {
  app.get('/api/thing', function(req, res) {
    res.send({
      "body": "The API gave me this crap right here."
    });
  });
};
