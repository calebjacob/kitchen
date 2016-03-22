var swig = require('swig');

exports.parse = function (str, line, parser, types, options, swig) {
  parser.on(types.STRING, function (token) {
    var string = token.match.replace(/["']/g, '');
    this.out.push(string);
  });

  return true;
};

exports.compile = function (compiler, args, content, parents, options, blockName) {
  var iconName = args[0];
  var filePath = '../public/dist/icons/' + iconName + '.svg';
  var svg = swig.render('{% include "' + filePath + '" %}');
  svg = svg.replace(/<svg/, '<svg class="icon icon--' + iconName + '" role="img" aria-hidden="true" version="1.1"');

  return "_output += '" + svg + "';";
};

exports.ends = false;
exports.block = false;
