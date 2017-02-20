var req;
var res;
var next = sinon.spy(function next() {});
var example = require(`${appRoot}/routes/partials/example.js`);



describe('partials - example()', function() {
  beforeEach(function() {
    next.reset();

    req = nodeMocksHttp.createRequest();
    res = nodeMocksHttp.createResponse();

    sinon.spy(res, 'render');

    example(req, res, next);
  });

  it('renders a view', function() {
    sinon.assert.calledWith(res.render, 'partials/example');
  });
});
