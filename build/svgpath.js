var fs = require('fs');
var xml2js = require('xml2js');
var path = require('path');
var parser = new xml2js.Parser();
var svgFolder = path.resolve(__dirname, '../src/svg/');
var svgJs = path.resolve(__dirname, '../src/svg.js');
var paths = {};
var queue = [];
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
        //console.log(a);
        console.log('export default ' + JSON.stringify(paths))
        fs.writeFile(svgJs, 'export default ' + JSON.stringify(paths), function(err, data) {});
    });
});