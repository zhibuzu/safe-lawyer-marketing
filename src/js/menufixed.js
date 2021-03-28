/*
 * @Author: your name
 * @Date: 2021-03-20 11:18:31
 * @LastEditTime: 2021-03-28 11:27:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /safe-lawyer-marketing/src/js/menufixed.js
 */
$(document).ready(function () {
    $("#x_menu").attr("xtop", document.getElementById("x_menu").getBoundingClientRect().top);
    var isIE = !!window.ActiveXObject;
    var isIE6 = isIE && !window.XMLHttpRequest;
    var isStart = false;
    if (isIE6) {
        roll("x_menu", 10);
    }
    $(window).scroll(function () {
        var oTop = $("#x_menu").attr("xtop");
        var h = document.documentElement.scrollTop || document.body.scrollTop;
        if ($(document).attr("scrollTop") > h) {
        }
        if ($(document).attr("scrollTop") < h) {
            $("#x_menu").show();
        }
        if (h < oTop) {
            $("#x_menu").show();
        }
        $(document).attr("scrollTop", h);

        if (h <= 0) {
            return;
        }
        if (isIE6 && h > oTop) {

            $("#x_menu").css({ position: "absolute", display: "block", top: "0px", opacity: "1" });
            $('#x_menu_bottom').css({ marginTop: "40px" });
        }
        if (h > oTop) {

            if (isIE6) {

            }
            else {
                $("#x_menu").css({ position: "fixed", width: "100%", top: "0px", opacity: "1" });
                $('#x_menu_bottom').css({ marginTop: "40px" });
            }
        }
        else {

            $("#x_menu").css({ position: "static", width: "100%", top: "0px", opacity: "1" });
            $('#x_menu_bottom').css({ marginTop: "0px" });
        }

    });

    function roll(arg, speed) {
        if (parseInt(speed, 10) < 10) speed = 10;
        var o = document.getElementById(arg);
        if (o.style.top == 0) o.style.top = 1 + "px";
        var t = parseInt(o.style.top);
        function wl(arg, speed) {
            var h = document.documentElement.scrollTop || document.body.scrollTop;
            var x = parseInt(o.style.top);
            var p = Math.ceil(Math.abs((h + t) - x) / speed);

            if (x <= h + t) {
                o.style.top = x + p;
                x = parseInt(o.style.top);
            }
            if (x >= h + t) {
                o.style.top = x - p;
                x = parseInt(o.style.top);
            }
            setTimeout(function () {
                wl(arg, speed);
            }, 10);


        }
        wl(arg, speed);

    }
})

