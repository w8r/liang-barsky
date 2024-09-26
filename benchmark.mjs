import Benchmark from 'benchmark';
import { clip } from './dist/index.mjs';
import lineclip from 'lineclip';

const bbox = [-5, -5, 5, 5];

new Benchmark.Suite()
  .add('liang-barsky', () => {
    var a = [-10, -10],
      b = [10, 10];
    clip(a, b, bbox);
  })
  .add('mapbox/lineclip', () => {
    var a = [-10, -10],
      b = [10, 10];
    lineclip([a, b], bbox);
  })
  .on('cycle', function(event) {
    console.log(event.target.toString());
  })
  .on('error', function(e) {
    throw e.target.error;
  })
  .on('complete', function() {
    console.log('- Fastest is ' + this.filter('fastest').map('name') + '\n');
  })
  .run({ async: true });
