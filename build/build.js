const fs = require('fs');
const xml2js = require('xml2js');
const path = require('path');
const parser = new xml2js.Parser();
const svgFolder = path.resolve(__dirname, '../src/svg/');
const svgJs = path.resolve(__dirname, '../src/svg.js');
const paths = {};
const queue = [];
const rollup = require('rollup');
const babel = require('rollup-plugin-babel');
const uglify = require('rollup-plugin-uglify');
const ejs = require('ejs');

const SVGO = require('svgo');
const svgo = new SVGO()

fs.readdir(svgFolder, (err, files) => {

    files.forEach(fileName => {

        queue.push(new Promise(function(resolve, reject) {

            fs.readFile(path.resolve(svgFolder, fileName), function(err, data) {
                if (err) {
                    reject(err);
                } else {
                    svgo.optimize(data, svgodata => {
                        parser.parseString(svgodata.data, function(err, result) {
                            if (result.svg.path && result.svg.path.length) {
                                let pathItem = {
                                    path: result.svg.path.map(svgpath => {
                                        return svgpath.$.d;
                                    })
                                };
                                if (result.svg.$.viewBox != '0 0 1024 1024') {
                                    pathItem.viewBox = result.svg.$.viewBox;
                                }

                                paths[path.parse(fileName).name] = pathItem;
                            }
                            resolve()
                        });

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
        entry: path.resolve(__dirname, '../src/icon.js'),
        plugins: [
            babel(), uglify()
        ],
        globals: {
            Vue: 'Vue'
        }
    }).then(function(bundle) {
        let result = bundle.generate({
            format: 'iife'
        });
        fs.writeFile(path.resolve(__dirname, '../lib/icon.min.js'), result.code, function(err) {
            console.log('icon.min.js finished')
        });

    });

    rollup.rollup({
        entry: path.resolve(__dirname, '../src/component.js'),
        plugins: [
            babel(), uglify()
        ]
    }).then(function(bundle) {
        let result = bundle.generate({
            format: 'cjs'
        });
        fs.writeFile(path.resolve(__dirname, '../lib/component.min.js'), result.code, function(err) {
            console.log('component.min.js finished')
        });
    });


    ejs.renderFile(path.resolve(__dirname, '../index.ejs'), { icons: Object.keys(paths) }, function(err, str) {
        fs.writeFile(path.resolve(__dirname, '../index.html'), str, function(err) {
            console.log('index.html finished')
        });
    });
}