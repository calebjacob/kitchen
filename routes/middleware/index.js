var middleware = {
  example: require('./example')
};



module.exports = function(routers) {
  routers.public.use(middleware.example);
};
