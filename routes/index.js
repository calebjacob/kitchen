var express = require('express');



module.exports = function(app, models) {
  // Define our routers:

  var routers = {
    public: express.Router()
  };



  // Example router middleware:

  routers.public.use(function(req, res, next) {
    next();
    console.log('A public route is being accessed.', req.url);
  });



  // Require all routes:

  require('./pages')(routers, models);
  require('./partials')(routers, models);



  // Hook up routers:

  app.use('/', routers.public);
};
