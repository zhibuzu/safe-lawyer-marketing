/*
 * @Author: your name
 * @Date: 2021-03-07 15:50:32
 * @LastEditTime: 2021-03-27 11:48:58
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
            {
                test: /\.ejs$/,
                use: {
                    loader: 'ejs-compiled-loader',
                    options: {
                        htmlmin: true,
                        htmlminOptions: {
                            removeComments: true
                        }
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: '北京赛风法律',
            template: 'src/index.html',
        })
    ],
}