const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlBundlerPlugin = require('html-bundler-webpack-plugin');
const mode = process.env.NODE_ENV || 'development'

module.exports = {
    mode: mode,
    context: path.resolve(__dirname, 'app'),
   /* entry: './js/main.js',*/
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/i,
                use: ["css-loader"],
            },
        ],
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 9000,
    },
    plugins: [
        new HtmlBundlerPlugin({
            // specify the entry points for HTML pages (or a template)
            entry: {
                index: './index.html', // save generated HTML into dist/index.html
            },
            js: {
                filename: 'js/main.js', // JS output filename
            },
            css: {
                filename: 'css/main.css', // CSS output filename
            },
        }),
       /* new HtmlWebpackPlugin({
        template: './index.html',
        filename: './index.html'})*/
    ],
};