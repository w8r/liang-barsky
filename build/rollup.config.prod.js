import config  from './rollup.config';
import closure from 'rollup-plugin-closure-compiler-js';

config.format     = 'umd';
config.dest       = 'dist/liang-barsky.min.js';
config.moduleName = 'lbclip';
config.plugins.push(closure({
  outputWrapper: '(function(){\n%output%\n})()',
  processCommonJsModules: false,
  createSourceMap: true
}));

export default config;
