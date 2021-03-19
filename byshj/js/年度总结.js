// JavaScript Document
$(function(){
	$('.nd1').click(function () { 
	          $('.zj1').fadeIn(2000);
	          $('.zz').fadeIn();
	});
	$('.zz').click(function () {
	         $('.zj1').fadeOut();
	         $('.zz').fadeOut();
	})
	$('.nd2').click(function () { 
	          $('.zj2').fadeIn(2000);
	          $('.zz').fadeIn();
	});
	$('.zz').click(function () {
	         $('.zj2').fadeOut();
	         $('.zz').fadeOut();
	})
})