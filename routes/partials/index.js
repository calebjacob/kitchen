var partials = {
  example: require('./example')
};



module.exports = function(routers) {
  routers.public.get('/partials/example', partials.example);
};
