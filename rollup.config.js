var rollup = require('rollup');
var babel = require('rollup-plugin-babel');

export default {
    entry: 'build/index.js',
    format: 'iife',
    dest: 'build/demo.js',
    plugins: [
        babel()
    ]
}