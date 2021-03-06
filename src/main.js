/*
 * @Author: your name
 * @Date: 2021-03-07 16:05:09
 * @LastEditTime: 2021-03-28 20:56:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /safe-lawyer/loading-page/src/main.js
 */


require('./css/a8.css')
require('./css/animate.css')
require('./css/menu.css')
require('./css/lrtk.css')
require('!style-loader!css-loader!./css/mycss.css')
// import myCss from '!style-loader!css-loader!./css/mycss.css'


require('./js/jquery-1.8.3.min.js')
// require('./js/menufixed.js')
require('./js/lrtk.js')
// require('./js/wow.min.js')
// <!--飞入特效-->
// new WOW().init();

// images
require('./images/fo_ad.png')

// You should import the CSS file.
require('!style-loader!css-loader!@splidejs/splide/dist/css/splide.min.css');
import Splide from '@splidejs/splide';

// let template = require('./tpl/main.ejs')
// let data = require('./conf/data.json')
// document.getElementById('myapp').innerHTML = template(data);

// mdc text field
let username = document.querySelector('#username');
let mobile = document.querySelector('#mobile');
let company = document.querySelector('#company');
let message = document.querySelector('#message');
let form = document.getElementById('form');

mdc.textField.MDCTextField.attachTo(username);
mdc.textField.MDCTextField.attachTo(mobile);
mdc.textField.MDCTextField.attachTo(company);
mdc.textField.MDCTextField.attachTo(message);


function clearForm() {
    form.reset();
}

// View a list of images.
document.addEventListener('DOMContentLoaded', function () {
    new Splide('#images', {
        type: 'loop',
        perPage: 1,
        autoplay: true,
        pauseOnHover: true,
    }).mount();
});

// submit signup
document.querySelector('#signup-button').addEventListener('click', function (event) {
    let username_val = username.querySelector('[name=username]').value;
    let mobile_val = mobile.querySelector('[name=mobile]').value;
    let company_val = company.querySelector('[name=company]').value;
    let message_val = message.querySelector('[name=message]').value;
    let start_at_val = form.querySelector('[name=start_at]:checked').value;

    if (username_val.trim() === "" || mobile_val.trim() === '' || company_val.trim() === '' || start_at_val.trim() === '') {
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
        data: { username_val, mobile_val, company_val, message_val, start_at_val }
    })
        .success(function ({ code, msg }) {
            // console.log(code, msg);
            clearForm();
            if (code === 10000) {
                alert(msg);
                return;
            }
            alert(msg);
        })
        .fail(function () {
            // clearForm();
            alert('报名出了点异常，请重试！');
        });
})
