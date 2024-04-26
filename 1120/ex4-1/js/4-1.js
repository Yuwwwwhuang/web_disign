// JavaScript Document

$(document).ready(function(){

	$(".box").eq(0).addClass("ch_bg");
	$(".content").each(function(index){  //直的變橫的
		
		$(".content").eq(index).css({"left":480*index, "top":-480*index});
		
	});

	$(".box").click(function(){

		var _index = $(this).index(); //index在找this button編號
		
		$(this).addClass("ch_bg").siblings().removeClass("ch_bg"); //誰敲到誰變色 其他正常

		$(".content").each(function(index){			
			$(".content").eq(index).animate({left:480*index-(480*_index)},1000);
		});

	});	
	
});
