const servePath = '/vue-app';
//生产
const PRO_PUBLIC_PATH = '/vueapp/';
const publicPath = process.env.NODE_ENV === 'production' ? PRO_PUBLIC_PATH : '/';

module.exports = {
    publicPath,
    servePath
}