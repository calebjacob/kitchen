(function(helpers) {
  helpers.each = function each(array, callback) {
    var itemCount = array.length;

    for (var i = 0; i < itemCount; i++) {
      var item = array[i];
      var continueLoop = callback(item, i);

      if (continueLoop === false) {
        break;
      }
    }
  };
})(window.app.helpers);
