const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
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
            },
            {
                test: /\.(pdf|jpg|png|gif|svg|ico)$/,
                loader: 'url-loader'
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