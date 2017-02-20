var routers = {
  public: {
    get: sinon.spy(function get() {})
  }
};
var pages = require(`${appRoot}/routes/pages`);
var example = require(`${appRoot}/routes/pages/example`);



describe('pages', function() {
  beforeEach(function() {
    routers.public.get.reset();

    pages(routers);
  });

  describe('GET /', function() {
    it('example() is configured on the pulic router', function() {
      sinon.assert.calledWith(routers.public.get, '/', example);
    });
  });
});
