/*
 * @Author: your name
 * @Date: 2021-03-07 16:05:09
 * @LastEditTime: 2021-03-21 16:32:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /safe-lawyer/loading-page/src/main.js
 */


require('./css/a8.css')
require('./css/animate.css')
require('./css/menu.css')
require('./css/lrtk.css')
// require('!style-loader!css-loader!./css/mycss.css')
import myCss from '!style-loader!css-loader!./css/mycss.css'


require('./js/jquery-1.8.3.min.js')
require('./js/menufixed.js') 
require('./js/lrtk.js')
// require('./js/wow.min.js')
// <!--飞入特效-->
// new WOW().init();

// images
require('./images/fo_ad.png')

let template = require('./tpl/main.ejs')
let data = require('./conf/data.json')
document.getElementById('myapp').innerHTML = template(data);

// mdc text field
let username = document.querySelector('#username');
let mobile = document.querySelector('#mobile');
let company = document.querySelector('#company');
let message = document.querySelector('#message');
mdc.textField.MDCTextField.attachTo(username);
mdc.textField.MDCTextField.attachTo(mobile);
mdc.textField.MDCTextField.attachTo(company);
mdc.textField.MDCTextField.attachTo(message);

// submit signup
document.querySelector('#signup-button').addEventListener('click', function (event) {
    let username_val = username.querySelector('[name=username]').value;
    let mobile_val = mobile.querySelector('[name=mobile]').value;
    let company_val = company.querySelector('[name=company]').value;
    let message_val = message.querySelector('[name=message]').value;

    if (username_val.trim() === "" || mobile_val.trim() === '' || company_val.trim() === '') {
        alert('请填写完整报名信息！');
        return;
    }
    if (!/^1[3456789]\d{9}$/.test(mobile_val)) {
        alert('手机号格式错误！');
        return;
    }

    // alert(JSON.stringify());
    $.ajax({
        type: "POST",
        dataType: 'json',
        url: "submit.php",
        data: {username_val, mobile_val, company_val, message_val}
    })
    .success(function ({code, msg}) {
        console.log(code, msg);
        if (code === 10000) {
            alert(msg);
            return;
        }
        alert(msg);
    })
    .fail(function() {
        alert('报名出了点异常，请重试！');
    });
})
