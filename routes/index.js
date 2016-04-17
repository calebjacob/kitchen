var express = require('express');



module.exports = function(app, models) {
  // Define our routers:

  var routers = {
    public: express.Router()
  };



  // Require all middleware & routes:

  require('./middleware')(routers, models);
  require('./pages')(routers, models);
  require('./partials')(routers, models);



  // Hook up routers:

  app.use('/', routers.public);
};
