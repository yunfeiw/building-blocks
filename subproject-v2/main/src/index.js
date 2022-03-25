import { registerMicroApps, start } from 'qiankun';

// pro - dev


registerMicroApps([
  {
    name: 'react-app',
    // entry: '//localhost:3000', //测试
    entry: '/reactapp/',  //生产
    container: '#container',
    activeRule: '/react-app',
  },
  {
    name: 'vue-app',
    // entry: '//localhost:8081', //测试
    entry: '/vueapp/',  //生产
    container: '#container',
    activeRule: '/vue-app',
  },
]);
// 启动 qiankun
start();