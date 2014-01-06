(function() {
  window.addEventListener('load', function() {
    FastClick.attach(document.body);

    _.forEach(app.modules, function(module) {
      if (module.init) {
        module.init();
      }
    });
  }, false);
})();
