var routers = {
  public: {
    use: sinon.spy(function use() {})
  }
};
var middleware = require(`${appRoot}/routes/middleware`);
var example = require(`${appRoot}/routes/middleware/example`);



describe('middleware', function() {
  beforeEach(function() {
    routers.public.use.reset();

    middleware(routers);
  });

  describe('example', function() {
    it('is configured on the pulic router', function() {
      sinon.assert.calledWith(routers.public.use, example);
    });
  });
});
