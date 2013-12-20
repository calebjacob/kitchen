module.exports = function(app) {
  app.get('/partial', function(req, res) {
    res.send('This is a partial thing!');
  });
};
