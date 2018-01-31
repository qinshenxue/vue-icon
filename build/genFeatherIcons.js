const xml2js = require('xml2js')
const parser = new xml2js.Parser()

const fs = require('fs')
const path = require('path')
const ejs = require('ejs');

const featherDir = path.resolve(__dirname, '../node_modules/feather-icons/dist/icons/')
const queue = []
const featherIcons = {}
fs.readdir(featherDir, (err, files) => {

    files.forEach(fileName => {

        queue.push(new Promise(function (resolve, reject) {
            fs.readFile(path.resolve(featherDir, fileName), function (err, data) {
                if (err) {
                    reject(err);
                } else {
                    var iconName = path.parse(fileName).name
                    parser.parseString(data, function (err, result) {
                        const children = []
                        for (let item in result.svg) {
                            switch (item) {

                                case 'path':
                                    result.svg.path.forEach(function (pathItem) {
                                        children.push('p', pathItem.$.d)
                                    })
                                    break
                                case 'rect':
                                    result.svg.rect.forEach(function (pathItem) {
                                        let attr = pathItem.$
                                        children.push('r', `${attr.x} ${attr.y} ${attr.width} ${attr.height}` + (attr.rx ? ` ${attr.rx} ${attr.ry}` : ''))
                                    })
                                    break
                                case 'circle':
                                    result.svg.circle.forEach(function (pathItem) {
                                        let attr = pathItem.$
                                        children.push('c', `${attr.cx} ${attr.cy} ${attr.r}`)
                                    })
                                    break
                                case 'ellipse':
                                    result.svg.ellipse.forEach(function (pathItem) {
                                        let attr = pathItem.$
                                        children.push('e', `${attr.cx} ${attr.cy} ${attr.rx} ${attr.ry}`)
                                    })
                                    break
                                case 'line':
                                    result.svg.line.forEach(function (pathItem) {
                                        let attr = pathItem.$
                                        children.push('l', `${attr.x1} ${attr.x2} ${attr.y1} ${attr.y2}`)
                                    })
                                    break
                                case 'polygon':
                                    result.svg[item].forEach(function (pathItem) {
                                        children.push('g', pathItem.$.points)
                                    })
                                    break
                                case 'polyline':
                                    result.svg[item].forEach(function (pathItem) {
                                        children.push('b', pathItem.$.points)
                                    })
                                    break
                            }
                        }
                        featherIcons[iconName] = children
                        resolve()
                    });
                }
            });

        }));
    });

    Promise.all(queue).then(function () {
        fs.writeFile(path.resolve(__dirname, '../src/feather-icons.js'), 'export default ' + JSON.stringify(featherIcons), function (err, data) {
            if (err) {
                console.error(err)
            }
        });

        ejs.renderFile(path.resolve(__dirname, '../index.ejs'), {icons: Object.keys(featherIcons)}, function (err, str) {
            fs.writeFile(path.resolve(__dirname, '../index.html'), str, function (err) {
                console.log('index.html finished')
            });
        })
    });
});


