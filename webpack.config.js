const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: {
        main: __dirname + '/src/script/main.js',
        a: __dirname + '/src/script/a.js',
        b: __dirname + '/src/script/b.js',
        c: __dirname + '/src/script/c.js',
    },
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'js/[name]-[chunkhash].js',
        //publicPath:'http://cdn.com'   //上线路径
    },
    plugins: [
        new htmlWebpackPlugin({
            template: 'index.html',
            filename:'index.html',
            title: 'webpack is good',
            inject: 'body',
            chunks:['main','a'],
            //excludeChunks:['b'] //当需要引用的chunks比较多的时候，排除不需要的chunks
        }),
        new htmlWebpackPlugin({
            template: 'index.html',
            filename:'a.html',
            title: 'this is a',
            inject: 'body',
            chunks:['a']
        }),
        new htmlWebpackPlugin({
            template: 'index.html',
            filename:'b.html',
            title: 'this is b',
            inject: 'body',
            chunks:['b']
        }),
        new htmlWebpackPlugin({
            template: 'index.html',
            filename:'c.html',
            title: 'this is c',
            inject: 'body',
            chunks:['c']
        })
    ]
}