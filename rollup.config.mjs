// rollup.config.mjs
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import nodeResolve from '@rollup/plugin-node-resolve';

export default {
  input: 'nodejs/server.js',
  output: {
    file: 'dist/nodejs/index.js',
    format: 'cjs',
  },
  external: ['bridge'],
  plugins: [
    commonjs(),
    json(),
    nodeResolve({
      preferBuiltins: true,
    }),
  ],
};