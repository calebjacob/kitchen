var swig = require('swig');
var helpers = require(`${appRoot}/helpers`);
var swigIconTag = require(`${appRoot}/helpers/swig-icon-tag`);



describe('helpers', function() {
  it('exposes swigIconTag()', function() {
    expect(helpers.swigIconTag).to.equal(swigIconTag);
  });
});
