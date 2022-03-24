const servePath = '/vue-app';
const publicPath = process.env.NODE_ENV === 'production' ? servePath : '/';
console.log(publicPath);
module.exports = {
    publicPath,
    servePath
}