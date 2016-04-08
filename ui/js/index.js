(function(helpers) {
  window.addEventListener('DOMContentLoaded', function() {
    // Remove 300ms click delay on all touch devices:
    FastClick.attach(document.body);

    // Initialize all components:
    helpers.initializeComponents(document.body);
  }, false);
})(window.app.helpers);
