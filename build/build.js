var fs = require('fs');
var xml2js = require('xml2js');
var path = require('path');
var parser = new xml2js.Parser();
var svgFolder = path.resolve(__dirname, '../src/svg/');
var svgJs = path.resolve(__dirname, '../src/svg.js');
var paths = {};
var queue = [];
const rollup = require('rollup');
const babel = require('rollup-plugin-babel');
const ejs = require('ejs');
fs.readdir(svgFolder, (err, files) => {

    files.forEach(fileName => {

        queue.push(new Promise(function(resolve, reject) {

            fs.readFile(path.resolve(svgFolder, fileName), function(err, data) {
                if (err) {
                    reject(err);
                } else {
                    parser.parseString(data, function(err, result) {
                        let a = result.svg.path.map(svgpath => {
                            return svgpath.$.d;
                        })
                        paths[path.parse(fileName).name] = a;
                        resolve()
                    });
                }
            });

        }));
    });

    Promise.all(queue).then(function() {
        fs.writeFile(svgJs, 'export default ' + JSON.stringify(paths), function(err, data) {

            build();
        });


    });
});



function build() {
    rollup.rollup({
        entry: path.resolve(__dirname, './index.js'),
        plugins: [
            babel()
        ]
    }).then(function(bundle) {
        // Generate bundle + sourcemap
        var result = bundle.generate({
            // output format - 'amd', 'cjs', 'es', 'iife', 'umd'
            format: 'iife'
        });

        ejs.renderFile(path.resolve(__dirname, '../index.ejs'), result, {}, function(err, str) {
            // str => Rendered HTML string
            console.log(str);
            fs.writeFile(path.resolve(__dirname, '../index.html'), str, function(err) {
                console.log(err)
            });
        });

    });
}