var req;
var res;
var next = function() {};
var renderSpy;



describe('Route - /partials/example', function() {
  beforeEach(function() {
    req = nodeMocksHttp.createRequest();
    res = nodeMocksHttp.createResponse();
    renderSpy = sinon.spy(res, 'render');
  });

  describe('GET', function() {
    var route = requireAppRoot('routes/partials/example.js');

    beforeEach(function() {
      route(req, res, next);
    });

    it('renders a view', function() {
      expect(renderSpy.getCall(0).args[0]).to.equal('partials/example');
    });
  });
});
