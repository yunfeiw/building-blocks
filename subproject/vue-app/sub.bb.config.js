const servePath = '/vue-app/';
const publicPath = process.env.NODE_ENV === 'production' ? servePath : '/';

module.exports = {
    publicPath,
    servePath
}