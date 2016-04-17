var req;
var res;
var next;
var middleware = requireAppRoot('routes/middleware/example.js');



describe('Middleware - example()', function() {
  beforeEach(function() {
    req = nodeMocksHttp.createRequest();
    res = nodeMocksHttp.createResponse();
    next = sinon.spy();

    middleware(req, res, next);
  });

  it('sets a message named foobar on req', function() {
    expect(req.foobar.length).to.be.above(0);
  });

  it('calls next', function() {
    expect(next.called).to.be.true;
  });
});
