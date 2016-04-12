module.exports = function(mongoose) {
  // First, define the schema:

  var schema = mongoose.Schema({
    name: {
      type: String,
      validate: /^[a-zA-Z\u00C0-\u017F0-9\s,\-']+$/
    },

    message: {
      type: String
    },

    isAwesome: {
      type: Boolean
    }
  });



  // Set up schema methods:

  schema.methods.exampleMessage = function() {
    return 'Hi! An example schema method produced this console log.';
  };



  // Lastly, create and return the model based off our schema so we can make some model babies:

  var Example = mongoose.model('Example', schema);

  return Example;
};
