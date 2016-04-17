var middleware: {
  example: require('./example')
};



module.exports = function(routers, models) {
  routers.public.use(function(req, res, next) {
    middleware.example(req, res, next, models);
  });
};
