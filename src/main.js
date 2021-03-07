/*
 * @Author: your name
 * @Date: 2021-03-07 16:05:09
 * @LastEditTime: 2021-03-07 18:47:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /safe-lawyer/loading-page/src/main.js
 */


require('./css/a8.css')
require('./css/animate.css')
require('./css/menu.css')
require('./css/lrtk.css')


require('./js/jquery-1.8.3.min.js')
require('./js/menufixed.js') 
require('./js/lrtk.js')
// require('./js/wow.min.js')
// <!--飞入特效-->
// new WOW().init();

let template = require('./tpl/main.ejs')
let data = require('./conf/data.json')
document.getElementById('myapp').innerHTML = template(data);