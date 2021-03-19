$(function(){
	
	$('.zd img').click(function (){
		         $('html').animate({scrollTop:0},300)
	})
	$(window).scroll(function (){
		      if($(window).scrollTop()>747){
				  $('.zd img').show(1500)
			  }else{
				  $('.zd img').hide(1500)
			  }
	})
	$('li').click(function () { 
		$(this).width(90).height(90).animate({fontSize:45},0).siblings().width(70).height(70).animate({fontSize:35},0);
	});
	$('.DA').click(function(){ $('html').animate({scrollTop:0},300)})
	$('.US').click(function(){ $('html').animate({scrollTop:620},300)})
	$('.LZ').click(function(){ $('html').animate({scrollTop:1220},300)})
	$('.XD').click(function(){ $('html').animate({scrollTop:1820},300)})
	$('.HH').click(function(){ $('html').animate({scrollTop:2420},300)})
	$('li').hover(function () {	
			$(this).children('img').fadeIn();
		}, function () {
			$(this).children('img').fadeOut();
		}
	);
	$('.left,.right').hover(function () {	
			$(this).children('img').animate({right:0},1000);
		}, function () {
			$(this).children('img').animate({right:-150},1000);
		}
	);
})