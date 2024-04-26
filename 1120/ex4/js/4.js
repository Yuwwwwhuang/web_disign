// JavaScript Document

$(document).ready(function(){

	$(".box").eq(0).addClass("ch_bg");
	$(".content").eq(0).show();

	$(".box").click(function(){

		var _index = $(this).index(); //index在找this button編號
		
		$(this).addClass("ch_bg").siblings().removeClass("ch_bg"); //誰敲到誰變色 其他正常

		var left_s = 480 * _index * (-1);
		$(".content").animate({left:left_s},1000); //1000毫秒

	});	
	
});
