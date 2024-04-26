// JavaScript Document

$(document).ready(function(){	
	
	$(".menu").click(function(){ 
	
		$("nav").slideToggle();
		
	});

    //確保在螢幕大的時候menu會出現在螢幕上 不會因為前面關掉了就消失
    $(window).on('load resize',function(){
		var a_w = document.body.clientWidth;
		if(a_w >= 768) $("nav").show(); else $("nav").hide();
	});

    //fancybox group
    $(".fancybox").fancybox({
        openEffect	: 'none', //'elastic', 'fade' or 'none'
        closeEffect	: 'none'
    });
    
    //fancybox single
    $("#s2").fancybox({
    	openEffect	: 'elastic',//彈出
    	closeEffect	: 'elastic',

    	helpers : {
    		title : {
    			type : 'float' // 'float', 'inside', 'outside' or 'over'
    		}
    	}
    });

			
});
