module.exports = function(req, res, next, models) {
  req.foobar = 'This is an example';
  next();
};
