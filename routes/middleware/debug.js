module.exports = function(error, req, res, next) {
  console.dir(error);

  next();
};
