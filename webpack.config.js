var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var version = require('./package.json').version;

module.exports = {
    entry: './src/test-first/index.js',
    output: {
        path: path.resolve(__dirname, 'dist/'+version),
        filename: 'test-first.js',
        library: 'testFirst',
        libraryTarget: 'umd'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("styles.css"),
    ]
};