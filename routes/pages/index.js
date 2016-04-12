module.exports = function(routers, models) {
  routers.public.get('/', function(req, res, next) {
    require('./example')(req, res, next, models);
  });
};
