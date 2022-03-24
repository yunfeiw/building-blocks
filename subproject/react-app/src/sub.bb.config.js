const servePath = '/react-app/';

//生产
const PRO_PUBLIC_PATH = '/child/react-app/';
const publicPath = process.env.NODE_ENV === 'production' ? PRO_PUBLIC_PATH : '/';

module.exports = {
    publicPath,
    servePath
}