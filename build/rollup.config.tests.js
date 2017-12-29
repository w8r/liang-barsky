import buble      from 'rollup-plugin-buble';
import multiEntry from 'rollup-plugin-multi-entry';

export default {
  entry:     'tests/index.test.js',
  plugins:   [buble(), multiEntry()],
  format:    'cjs',
  external:  [ 'mocha', 'chai' ],
  intro:     'require("source-map-support").install();',
  dest:      'build/tests-bundle.js',
  sourceMap: true
};
