const path = require('path')
const root = __dirname

// 引入html-webpack-plugin
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

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
        'react-hot-loader/patch', // 激活HMR
        'webpack-dev-server/client',
        'webpack/hot/only-dev-server',
        path.resolve(root, 'src/index.js')
    ],
    // 出口文件
    output: {
        filename: '[name].[hash].bundle.js',
        path: path.resolve(root, 'dev'),
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
            {test: /\.jsx?$/, use: ['babel-loader'], exclude: /node_modules/},
            {test: /\.js$/, use: ['babel-loader', 'eslint-loader'], exclude: /node_modules/}
        ]
    },
    plugins: [
        // 定义环境变量为开发环境
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development'),
            IS_DEVELOPMETN: true,
        }),
        new HtmlWebpackPlugin({
            title: '借立得',
            template: path.resolve(root, './templates/index.html')
        }),
        new webpack.optimize.ModuleConcatenationPlugin(), // webpack3范围提升插件
        new webpack.HotModuleReplacementPlugin(), // 热替换插件
        new webpack.NamedModulesPlugin(), // 执行热替换时打印模块名字
        new webpack.optimize.CommonsChunkPlugin({  // 提取公共模块
            name: 'common'
        })
    ],
    resolve: {
        extensions: ['.js', '.json', '.scss', '.less', 'jsonp']
    }
}
