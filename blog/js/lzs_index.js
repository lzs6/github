// JavaScript Document
$(function(){
	$('#ccw').click(function () { 
	          $('#cd').fadeIn(2000);
	          $('.zz').fadeIn();
	});
	$('.zz').click(function () {
	         $('#cd').fadeOut();
	         $('.zz').fadeOut();
	})
	$('.zd img').click(function (){
		         $('html').animate({scrollTop:0},300)
	})
	$('#xl').click(function(){
		     $('html').animate({scrollTop:747},300)
	})
	$(window).scroll(function (){
		      if($(window).scrollTop()>747){
				  $('.zd img').show(1500)
			  }else{
				  $('.zd img').hide(1500)
			  }
	})
	// $('#xl').setInterval(function() {
	// 	$(this).animate({transform:scale(1.5)});
	// }, 2000);
})