/*
 * @Author: your name
 * @Date: 2021-02-20 14:37:28
 * @LastEditTime: 2021-03-07 16:22:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-demos/demo02/babel.config.js
 */
module.exports = {
    presets: [
        ['@babel/preset-env', {
            'targets': {
                'browsers': ['last 1 chrome version'] // 最近2个版本的浏览器
            }
        }]
    ]
}