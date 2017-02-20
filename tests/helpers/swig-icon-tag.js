var swig = require('swig');
var swigIconTag = require(`${appRoot}/helpers/swig-icon-tag`);



describe('Helpers - swigIconTag()', function() {
  beforeEach(function() {
    swig.setDefaults({
      loader: swig.loaders.fs(`${appRoot}/views`)
    });
    swig.setTag('icon', swigIconTag.parse, swigIconTag.compile, swigIconTag.ends, swigIconTag.block);
  });

  it('renders HTML for inline SVG icons', function() {
    expect(swig.render('{% icon "star" %}')).to.equal('<svg class="icon icon--star" role="img" aria-hidden="true" version="1.1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path d="M8 0l2.473 5.267L16 6.112l-4 4.099.944 5.789L8 13.268 3.055 16 4 10.211 0 6.112l5.528-.845z"/></svg>');
  });
});
