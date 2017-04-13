var Suite = require('benchmark').Suite;
var clip  = require('../dist/liang-barsky');

const bbox = [-5, -5, 0, 0];
const a = [-10, -10], b = [10, 10];

new Suite().add('liang-barsky', () => clip(a, b, bbox))
  .on('cycle', function(event) {
    console.log(event.target.toString());
  })
  .on('error', function(e) {
    throw e.target.error;
  })
  .run({ 'async': true });
