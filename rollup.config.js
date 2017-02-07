var rollup = require('rollup');
var babel = require('rollup-plugin-babel');

export default {
    entry: 'demo/demo.js',
    format: 'iife',
    dest: 'dist/bundle.js',
    plugins: [
        babel()
    ]
}