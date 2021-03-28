/*
 * @Author: your name
 * @Date: 2021-03-07 15:50:32
 * @LastEditTime: 2021-03-28 10:44:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /safe-lawyer/loading-page/webpack.config.js
 */
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
    entry: {
        main: path.resolve(__dirname, 'src/main.js'),
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'js/[name].js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                loader: 'file-loader',
                options: {
                    outputPath: 'css',
                    name: '[name].[ext]'
                }
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    outputPath: 'images-out',
                    name: '[name].[ext]?[hash]'
                }
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: '北京赛风法律',
            comm: {
                "title": "做股权激励就找胡礼新",
                "logo": "https://pro3bc52a2b-pic4.ysjianzhan.cn/upload/921591666611.jpg",
                "homepage": "https://www.safe-lawyer.com",
                "company": "赛风法律",
                "mobile": "13621132233",
                "tel": "010-57162255",
                "email": "1838301961@qq.com",
                "address": "北京东城区北三环36号环球贸易中心C座",
                "beian": "京ICP备14012745号-1",
                "qq": "1838301961"
            },
            template: 'src/index.html',
        })
    ],
}