(function(helpers) {
  helpers.dashToCamel = function dashToCamel(string) {
    return string.replace(/-([a-z])/g, function (g) {
      return g[1].toUpperCase();
    });
  };
})(window.app.helpers);
