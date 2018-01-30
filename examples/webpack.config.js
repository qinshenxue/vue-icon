const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
function resolve(relPath) {
    return path.resolve(__dirname, relPath);
}
module.exports = {
    entry: {
        index: resolve('./index.js'),
    },
    output: {
        filename: 'index.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: "babel-loader",
            include: [resolve('./')]
        },
            {
                test: /\.vue$/,
                use: {
                    loader: "vue-loader"
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: resolve('./index.html'),
            inject: true
        })
    ]
}