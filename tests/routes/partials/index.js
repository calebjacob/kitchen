var routers = {
  public: {
    get: sinon.spy(function get() {})
  }
};
var partials = require(`${appRoot}/routes/partials`);
var example = require(`${appRoot}/routes/partials/example`);



describe('partials', function() {
  beforeEach(function() {
    routers.public.get.reset();

    partials(routers);
  });

  describe('GET /partials/example', function() {
    it('example() is configured on the pulic router', function() {
      sinon.assert.calledWith(routers.public.get, '/partials/example', example);
    });
  });
});
