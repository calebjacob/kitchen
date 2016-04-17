var req;
var res;
var next = function() {};
var renderSpy;
var mockedModels = {
  Example: function Example() {}
};
var route = requireAppRoot('routes/pages/example.js');



describe('Route - GET - /', function() {
  beforeEach(function() {
    req = nodeMocksHttp.createRequest();
    res = nodeMocksHttp.createResponse();
    renderSpy = sinon.spy(res, 'render');

    route(req, res, next, mockedModels);
  });

  it('renders a view', function() {
    expect(renderSpy.getCall(0).args[0]).to.equal('pages/index');
  });

  it('passes generated example model to view', function() {
    expect(renderSpy.getCall(0).args[1] instanceof mockedModels.Example).to.be.true;
  });
});
