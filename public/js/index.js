window.addEventListener('load', function() {
  FastClick.attach(document.body);

  _.forEach(modules, function(module) {
    if (module.init) {
      module.init();
    }
  });
}, false);
