import "babel-polyfill";
import 'whatwg-fetch';
import { registerMicroApps, start } from 'qiankun';

// pro - dev


registerMicroApps([
  {
    name: 'react-app',
    entry: '//localhost:3000', 
    container: '#container',
    activeRule: '/react-app',
  },
  {
    name: 'vue-app',
    entry: '//localhost:8081', 
    container: '#container',
    activeRule: '/vue-app',
  },
]);
// 启动 qiankun
start();