const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlBundlerPlugin = require('html-bundler-webpack-plugin');
const mode = process.env.NODE_ENV || 'development'

module.exports = {
    mode: mode,
    context: path.resolve(__dirname, 'app'),
    entry: './js/main.js',
    output: {
        filename: './js/main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/i,
                use: [ 'style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
                generator: {
                    // keep original filenames and copy images to `dist/img/`
                    filename: 'img/[name][ext]',
                },
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
         /*new HtmlBundlerPlugin({
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
         }),*/
       new HtmlWebpackPlugin({
            template: './index.html',
            filename: './index.html',
        })
    ],
};