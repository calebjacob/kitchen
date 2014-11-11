module.exports = function(app, config) {
  var models = require('../../models')(app, config);

  app.get('/api/example', function(req, res) {
    var example = new models.Example({
      name: 'Chuck Norris',
      message: 'Howdy!'
    });

    example.sayHi();

    res.send(example);
  });
};
