var example;
var data = {
  name: 'Chuck Norris',
  message: 'Enjoy a waffle or two today.',
  isAwesome: true
};



describe('Model - Example', function() {
  beforeEach(function() {
    example = new models.Example(data);
  });

  describe('save()', function() {
    it('should be able to create a record', function(done) {
      example
        .save()
        .then(function(newExample) {
          expect(newExample.id).to.not.be.null;
          expect(newExample.name).to.equal(data.name);
          expect(newExample.message).to.equal(data.message);
          expect(newExample.isAwesome).to.equal(data.isAwesome);
          done();
        })
        .catch(function(error) {
          done(error);
        });
    });
  });

  describe('exampleMessage()', function() {
    it('should return an awesome message', function() {
      expect(example.exampleMessage().length).to.be.above(1);
    });
  });
});
