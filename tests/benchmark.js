var Suite = require('benchmark').Suite;
var clip     = require('../dist/liang-barsky');
var lineclip = require('lineclip');

const bbox = [-5, -5, 5, 5];

new Suite()
  .add('liang-barsky', () => {
    var a = [-10, -10], b = [10, 10]
    clip(a, b, bbox);
  })
  .add('mapbox/lineclip', () => {
    var a = [-10, -10], b = [10, 10]
    lineclip([a, b], bbox);
  })
  .on('cycle', function(event) {
    console.log(event.target.toString());
  })
  .on('error', function(e) {
    throw e.target.error;
  })
  .run({ 'async': true });
