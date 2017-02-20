var pages = {
  example: require('./example')
};



module.exports = function(routers) {
  routers.public.get('/', pages.example);
};
