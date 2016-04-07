module.exports = function(router, models) {
  router.get('/', function(req, res) {
    var example = new models.Example({
      name: 'Chuck Norris',
      message: 'Enjoy a waffle or two today.'
    });

    example.sayHi();

    res.render('pages/index', example);
  });
};
