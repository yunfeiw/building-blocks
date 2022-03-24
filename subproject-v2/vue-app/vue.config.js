const { name } = require('./package');
const { publicPath } = require('./sub.bb.config');

module.exports = {
  publicPath:"/child/vue-app/",
  
  devServer: {
    open: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  configureWebpack: {
    output: {
      library: `${name}-[name]`,
      libraryTarget: 'umd', // 把微应用打包成 umd 库格式
      jsonpFunction: `webpackJsonp_${name}`,
    },
  },
};