(function() {
  var privateFunction = function() {
    return 'foo';
  };

  modules.myModule = {
    vars: {
      value: ':)'
    },

    init: function() {
      console.log('My module initialized ' + this.vars.value);
      this.method();
    },

    method: function() {
      console.log('A public function returning private data: ' + privateFunction());
    }
  };
})();
