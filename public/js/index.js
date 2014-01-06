(function() {
  window.addEventListener('load', function() {
    // Remove 300ms click delay on all touch devices
    FastClick.attach(document.body);

    // Instantiate all modules
    _.forEach(app.modules, function(module) {
      if (module.init) {
        module.init();
      }
    });
  }, false);
})();
