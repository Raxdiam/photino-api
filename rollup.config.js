import typescript from '@rollup/plugin-typescript';
import dts from "rollup-plugin-dts";

export default [
  {
    input: 'src/index.ts',
    output: {
      file: 'dist/index.js',
      format: 'iife',
    },
    plugins: [typescript({tsconfig: 'tsconfig.json'})],
  },
  {
    input: 'src/index.ts',
    output: {
      file: 'dist/index.d.ts',
      format: 'es'
    },
    plugins: [dts()]
  }
];
