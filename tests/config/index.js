var returnNewConfig = function returnNewConfig() {
  return proxyquire(`${appRoot}/config`, {});
};



describe('config', function() {
  it('returns port passed in to process', function() {
    process.env.PORT = '1234';
    expect(returnNewConfig().port).to.equal('1234');
  });

  it('returns default port of "1337" if one is not passed in to process', function() {
    delete process.env.PORT;
    expect(returnNewConfig().port).to.equal('1337');
  });

  it('returns environment name passed in to process', function() {
    process.env.NODE_ENV = 'foobar';
    expect(returnNewConfig().environment).to.equal('foobar');
  });

  it('returns default environment name of "local" if one is not passed in to process', function() {
    delete process.env.NODE_ENV;
    expect(returnNewConfig().environment).to.equal('local');
  });

  describe('local environment', function() {
    beforeEach(function() {
      process.env.NODE_ENV = 'local';
    });
  });

  describe('production environment', function() {
    beforeEach(function() {
      process.env.NODE_ENV = 'production';
    });
  });
});
