const servePath = '/react-app/';
const publicPath = process.env.NODE_ENV === 'production' ? servePath : '/';

module.exports = {
    publicPath,
    servePath
}