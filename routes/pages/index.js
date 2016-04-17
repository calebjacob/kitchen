var routes = {
  example: require('./example')
};



module.exports = function(routers, models) {
  routers.public.get('/', function(req, res, next) {
    routes.example(req, res, next, models);
  });
};
