module.exports = function(app) {
  app.get('/full', function(req, res) {
    res.send('This is a full page rendering!');
  });
};
