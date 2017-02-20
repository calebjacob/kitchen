var req;
var res;
var next = sinon.spy(function next() {});
var debug = require(`${appRoot}/routes/middleware/debug.js`);
var error = 'This is the error';



describe('middleware - debug()', function() {
  beforeEach(function() {
    next.reset();

    req = nodeMocksHttp.createRequest();
    res = nodeMocksHttp.createResponse();

    debug(error, req, res, next);
  });

  it('calls next', function() {
    sinon.assert.called(next);
  });
});
