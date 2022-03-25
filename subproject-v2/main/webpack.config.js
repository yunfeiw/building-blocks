const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
module.exports = {
    target:"browserslist",
    entry: './src/index.js',
    devtool: "source-map",
    devServer: {
        open: true,
        port: 7099,
        // clientLogLevel: 'warning',
        // disableHostCheck: true,
        compress: true,
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
        historyApiFallback: true,
        // overlay: { warnings: false, errors: true },
    },
    output: {
        publicPath: '/',
    },
    mode: 'development',
    // module: {
    //     rules: [
    //         {
    //             test: /\.m?js$/,
    //             exclude: /(node_modules|bower_components)/,
    //             use: {
    //                 loader: 'babel-loader',
    //                 options: {
    //                     presets: ['@babel/preset-env']
    //                 }
    //             }
    //         }
    //     ]
    // },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './public/index.html',
            minify: {
                removeComments: true,
                collapseWhitespace: true,
            },
        })
    ]

}