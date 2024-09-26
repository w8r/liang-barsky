import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [],
  build: {
    target: 'es2015',
    minify: false,
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: '/src/index.ts',
      name: 'liangBarsky',
      formats: ['es', 'umd', 'cjs'],
      // the proper extensions will be added
      fileName: format => `index.${{ cjs: 'cjs', es: 'mjs', umd: 'umd.js' }[format]}`
    }
  }
});
