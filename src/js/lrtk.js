/*
 * @Author: your name
 * @Date: 2021-03-07 18:16:04
 * @LastEditTime: 2021-03-28 19:03:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /safe-lawyer/loading-page/src/js/lrtk.js
 */
$(function () {
	var tophtml = "<div id=\"izl_rmenu\" class=\"izl-rmenu\"><a href=\"http://wpa.qq.com/msgrd?v=3&amp;uin=1838301961&amp;site=qq&amp;menu=yes\" class=\"btn btn-qq\" target=\"_blank\"></a><div class=\"btn btn-wx\"><img class=\"pic\" src=\"https://tva1.sinaimg.cn/large/008eGmZEly1goydgpqqdpj30by0by752.jpg\" onclick=\"window.location.href=\'http://www.safe-lawyer.com\'\"/></div><div class=\"btn btn-phone\"><div class=\"phone\"><a href=\"tel:15801479466\" style=\"color: #fff;\">15801479466</a></div></div><div class=\"btn btn-top\"></div></div>";
	$("#top").html(tophtml);
	$("#izl_rmenu").each(function () {
		$(this).find(".btn-wx").mouseenter(function () {
			$(this).find(".pic").fadeIn("fast");
		});
		$(this).find(".btn-wx").mouseleave(function () {
			$(this).find(".pic").fadeOut("fast");
		});
		$(this).find(".btn-phone").mouseenter(function () {
			$(this).find(".phone").fadeIn("fast");
		});
		$(this).find(".btn-phone").mouseleave(function () {
			$(this).find(".phone").fadeOut("fast");
		});
		$(this).find(".btn-top").click(function () {
			$("html, body").animate({
				"scroll-top": 0
			}, "fast");
		});
	});
	var lastRmenuStatus = false;
	$(window).scroll(function () {//bug
		var _top = $(window).scrollTop();
		if (_top > 200) {
			$("#izl_rmenu").data("expanded", true);
		} else {
			$("#izl_rmenu").data("expanded", false);
		}
		if ($("#izl_rmenu").data("expanded") != lastRmenuStatus) {
			lastRmenuStatus = $("#izl_rmenu").data("expanded");
			if (lastRmenuStatus) {
				$("#izl_rmenu .btn-top").slideDown();
			} else {
				$("#izl_rmenu .btn-top").slideUp();
			}
		}
	});
});