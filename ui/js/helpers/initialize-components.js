(function(helpers, components) {
  helpers.initializeComponents = function initializeComponents(container) {
    var elements = container.querySelectorAll('[data-component]');

    helpers.each(elements, function(element) {
      var componentNameDashCase = element.dataset.component;
      var componentNameCamelCase = helpers.dashToCamel(componentNameDashCase);
      var initializationFlag = componentNameCamelCase + 'Initialized';
      var componentHasBeenInitializedOnElement = element.dataset[initializationFlag];

      if (!componentHasBeenInitializedOnElement) {
        var Component = components[componentNameCamelCase];
        var component = new Component(element);

        if (helpers.shouldConsoleLog()) {
          console.log('Component "' + componentNameCamelCase + '" was initialized on this element:', element);
        }

        element.dataset[initializationFlag] = true;
      }

      else if (helpers.shouldConsoleLog()) {
        console.warn('Initialization of component "' + componentNameCamelCase + '" was skipped since it has already been initialized on this element:', element);
      }
    });
  };
})(window.app.helpers, window.app.components);
