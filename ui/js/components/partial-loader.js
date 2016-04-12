(function(components, services, helpers) {
  components.partialLoader = function partialLoader(element) {
    var component = this;
    var loadButton = helpers.getElement(element, 'loader-button');
    var partialName = element.dataset.partialName;
    var partialWrapper = helpers.getElement(element, 'wrapper');



    function init() {
      loadButton.addEventListener('click', function() {
        loadPartial();
      });
    }



    function loadPartial() {
      partialWrapper.innerHTML = '';

      services.partials
        .fetchPartial(partialName)
        .then(function(partial) {
          partialWrapper.appendChild(partial);
        })
        .catch(function() {
          partialWrapper.innerHTML = '<p>Oh bananas! There was a problem fetching the partial.</p>'
        });
    }



    init();
  };
})(window.app.components, window.app.services, window.app.helpers);
