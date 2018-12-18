const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

let debug = process.env.NODE_ENV !== "production";
let webpack = require('webpack');
let path = require('path');


module.exports = {
    context: path.join(__dirname, "public"),
    entry: "./js/app.js",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
            },
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            }
        ]
    },
    output: {
        path: __dirname + "/public/js/",
        filename: "bundle.js"
    },
    optimization: {
        minimizer: [new UglifyJsPlugin()],
    },
    watch: true
};