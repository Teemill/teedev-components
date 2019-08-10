import vue from 'rollup-plugin-vue';
import commonjs from 'rollup-plugin-commonjs' 
import typescript from 'rollup-plugin-typescript';
export default {
  input: 'src/index.ts',
  output: {
    format: 'esm',
    file: 'dist/index.js'
  },
  external: ['vue'],
  plugins: [
    commonjs(),
    typescript({
      tsconfig: false,
      experimentalDecorators: false,
      module: 'es2015'
    }),
    vue(),
  ],
  onwarn: function (warning) {
    if (warning.code === 'THIS_IS_UNDEFINED') {
        return;
    }

    console.error(warning.message);
  },
};