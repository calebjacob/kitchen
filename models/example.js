module.exports = function(mongoose) {
  // First, define the schema:

  var schema = mongoose.Schema({
    name: {
      type: String,
      validate: /^[a-zA-Z\u00C0-\u017F0-9\s,\-']+$/
    },

    message: {
      type: String,
      validate: /.+/
    }
  });



  // Set up methods that this model will be able to call:

  schema.methods.sayHi = function() {
    console.log('Hi!');
  };



  // Lastly, create and return the model based off our schema so we can make some model babies:

  var Example = mongoose.model('Example', schema);

  return Example;
};
