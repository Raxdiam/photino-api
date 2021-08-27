import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import sourceMaps from 'rollup-plugin-sourcemaps';
//import typescript from '@rollup/plugin-typescript';
import typescript from 'rollup-plugin-typescript2';
import replace from '@rollup/plugin-replace';
//import { terser } from 'rollup-plugin-terser';

export default {
  input: 'src/index.ts',
  output: [
    { file: 'dist/umd/photino.js', name: 'photino', format: 'umd' },
    //{ file: 'dist/umd/photino.min.js', name: 'photino', format: 'umd' },
    { file: 'dist/es5/photino.js', format: 'es' },
  ],
  external: ['uuid'],
  plugins: [
    json(),
    typescript({
      tsconfig: 'tsconfig.dist.json',
    }),
    commonjs(),
    resolve(),
    sourceMaps(),
    replace({
      'uuid__namespace.v4': 'uuidv4',
    }),
  ],
};
