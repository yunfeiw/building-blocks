import { registerMicroApps, start } from 'qiankun';

// pro - dev


registerMicroApps([
  {
    name: 'react-app',
    entry: '//localhost:3000', //测试
    // entry: '/child/react-app/', //方式1
    
    container: '#container',
    activeRule: '/react-app-history',
  },
  {
    name: 'vue-app',
    entry: '//localhost:8081', //测试
    // entry: '/child/vue-app/', //方式1
    container: '#container',
    activeRule: '/vue-app-history',
  },
]);
// 启动 qiankun
start();