module.exports = function(req, res, next) {
  req.foobar = 'This is an example';

  next();
};
