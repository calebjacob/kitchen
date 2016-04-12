module.exports = function(mongoose) {
  return {
    Example: require('./example.js')(mongoose)
  };
};
