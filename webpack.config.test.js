const path = require('path')
const root = __dirname

// 引入html-webpack-plugin
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
// clean dist
const CleanWebpackPlugin = require('clean-webpack-plugin');

const autoprefixer = require('autoprefixer');
const postcssOpts = {
    ident: 'postcss', // https://webpack.js.org/guides/migrating/#complex-options
    plugins: () => [
        autoprefixer({
            browsers: ['last 2 versions', 'Firefox ESR', '> 1%', 'ie >= 8', 'iOS >= 8', 'Android >= 4'],
        })
    ],
};

module.exports = {
    // 入口文件
    entry: [
        path.resolve(root, 'src/index.js')
    ],
    // 出口文件
    output: {
        filename: '[name].[hash].bundle.js',
        path: path.resolve(root, 'build'),
        publicPath: ''
    },
    // loaders
    module: {
        rules: [
            {test: /\.less/, use: [
                'style-loader', 'css-loader', 'less-loader',
                { loader: 'postcss-loader', options: postcssOpts }
            ]},
            {test: /\.css$/, use: [
                'style-loader', 'css-loader',
                { loader: 'postcss-loader', options: postcssOpts }
            ]},
            {test: /\.(png|jpg|gif)$/, use: [{loader: 'file-loader', options: {
                limit: 10000,
                name: 'images/[name].[hash:8].[ext]'
            }}]},
            {test: /\.jsx?$/, use: ['babel-loader'], exclude: /node_modules/}
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['build']),
        // 定义环境变量为测试环境
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('test'),
            IS_DEVELOPMETN: true,
        }),
        new HtmlWebpackPlugin({
            title: '借立得',
            template: path.resolve(root, './templates/index.html')
        }),
        // new webpack.optimize.UglifyJsPlugin({minimize:true}),
        new webpack.optimize.ModuleConcatenationPlugin(),
        new webpack.optimize.CommonsChunkPlugin({  // 提取公共模块
            name: 'common'
        })
    ],
    resolve: {
        extensions: ['.js', '.json', '.scss', '.less', 'jsonp']
    }
}
