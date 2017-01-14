(function(helpers) {
  helpers.getElement = function getElement(container, name) {
    return container.querySelector('[data-element="' + name + '"]');
  };
})(window.app.helpers);
