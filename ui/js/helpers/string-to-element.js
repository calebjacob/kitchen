(function(helpers) {
  helpers.stringToElement = function stringToElement(string) {
    var div = document.createElement('div');
    div.innerHTML = string.trim();

    helpers.initializeComponents(div);

    return div.firstChild;
  };
})(window.app.helpers);
