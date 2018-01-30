const path = require('path');
const babel = require('rollup-plugin-babel');
const uglify = require('rollup-plugin-uglify');

const plugins = [babel()]

function resolve(relPath) {
    return path.resolve(__dirname, relPath)
}

export default [{
    input: resolve('../src/vue-feather-plugin.js'),
    plugins,
    output: {
        format: 'es',
        file: resolve('../lib/vue-feather-plugin.es.js')
    }
}, {
    input: resolve('../src/vue-feather.js'),
    plugins,
    output: {
        format: 'es',
        file: resolve('../lib/vue-feather.es.js')
    }
}, {
    input: resolve('../src/vue-feather-iife.js'),
    plugins: [babel(), uglify()],
    output: {
        format: 'iife',
        file: resolve('../lib/vue-feather.min.js'),
        globals: {
            Vue: 'Vue'
        }
    }
}, {
    input: resolve('../src/feather-icons.js'),
    plugins,
    output: {
        format: 'es',
        file: resolve('../lib/feather-icons.es.js')
    }
}]
