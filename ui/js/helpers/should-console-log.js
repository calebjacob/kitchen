(function(helpers) {
  helpers.shouldConsoleLog = function shouldConsoleLog() {
    var isRunningOnLocalhost = location.hostname === 'localhost';

    if (isRunningOnLocalhost) {
      return true;
    }

    else {
      return false;
    }
  };
})(window.app.helpers);
