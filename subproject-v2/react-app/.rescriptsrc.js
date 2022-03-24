const { name } = require('./package');
const { publicPath } = require('./src/sub.bb.config');

module.exports = {
  webpack: (config) => {
    config.output.library = `${name}-[name]`;
    config.output.libraryTarget = 'umd';

    // 在2020-10-10发布的webpack 5中已将 output.jsonpFunction 更名为 output.chunkLoadingGlobal​​​​​​​
    // config.output.jsonpFunction = `webpackJsonp_${name}`;
    config.output.chunkLoadingGlobal = `webpackJsonp_${name}`;
    config.output.globalObject = 'window';

    // 配置
    config.output.publicPath = '/child/react-app/';

    return config;
  },

  devServer: (_) => {
    const config = _;

    config.headers = {
      'Access-Control-Allow-Origin': '*',
    };
    config.historyApiFallback = true;
    config.hot = false;

    // console.log(config)
    
    // config.watchContentBase = false;
    config.liveReload = false;

    return config;
  },
};