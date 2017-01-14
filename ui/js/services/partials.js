(function(services, helpers) {
  function fetchPartial(name) {
    var path = '/partials/' + name;

    return new Promise(function(resolve, reject) {
      fetch(path)
        .then(function(response) {
          if (response.ok) {
            response
              .text()
              .then(function(html) {
                var partial = helpers.stringToElement(html);
                resolve(partial);
              });
          }

          else {
            reject(null);
          }
        })
        .catch(function(error) {
          reject(null);
        });
    });
  }


  services.partials = {
    fetchPartial: fetchPartial
  };
})(window.app.services, window.app.helpers);
