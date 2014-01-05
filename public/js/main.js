window.addEventListener('load', function() {
  FastClick.attach(document.body);
}, false);

_.forEach(modules, function(module) {
  if (module.init) {
    module.init();
  }
});
