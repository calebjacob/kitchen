module.exports = function(req, res, next, models) {
  var example = new models.Example({
    name: 'Chuck Norris',
    message: 'Enjoy a waffle or two today.',
    isAwesome: true
  });

  res.render('pages/index', example);
};
