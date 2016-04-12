module.exports = function(routers, models) {
  routers.public.get('/partials/example', function(req, res, next) {
    require('./example')(req, res, next, models);
  });
};
