(function() {
  var _privateFunction = function() {
    return 'foo';
  };

  app.modules.module = {
    vars: {
      value: ':)'
    },

    init: function() {
      console.log('My module initialized ' + this.vars.value);
      this.method();
    },

    method: function() {
      console.log('A public function returning private data: ' + _privateFunction());
    }
  };
})();
