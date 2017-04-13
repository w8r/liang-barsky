import config from './rollup.config';

config.format     = 'umd';
config.dest       = 'dist/liang-barsky.js';
config.moduleName = 'lbclip';

export default config;
