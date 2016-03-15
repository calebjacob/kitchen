var request = require('request');

module.exports = function(app, config) {
  app.get('/', function(req, res) {
    request.get(config.api + '/example', function(error, response, data) {
      if (!error && response.statusCode == 200) {
        res.render('pages/index', JSON.parse(data));
      }
    });
  });
};
