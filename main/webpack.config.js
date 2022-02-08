const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
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