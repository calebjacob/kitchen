var request = require('request');

module.exports = function(app, config) {
  app.get('/', function(req, res) {
    request.get(config.api + '/thing', function(error, response, body) {
      if (!error && response.statusCode == 200) {
        res.render('pages/index', JSON.parse(body));
      }
    });
  });
};
