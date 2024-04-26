// JavaScript Document

$(document).ready(function(){

	$(".box").eq(0).addClass("ch_bg");
	$(".content").eq(0).show();

	$(".box").click(function(){

		var _index = $(this).index(); //index在找this button編號 等號右邊讀過來
		
		$(this).addClass("ch_bg").siblings().removeClass("ch_bg"); //誰敲到誰變色 其他正常

		$(".content").eq(_index).fadeIn(500).siblings().fadeOut(500); //這個號碼的content變色

	});	
	
});
