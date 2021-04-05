$(function(){
    var OX,OY,OEX,OEY,X,Y,A;
    $('#i1').mousedown(function (e) { 
        OX=$(this).offset().left;
        OY=$(this).offset().top;
        OEX=e.pageX;
        OEY=e.pageY;
        $(document).mousemove(function (e) { 
            X=OX+e.pageX-OEX+'px';
            Y=OY+e.pageY-OEY+'px';
           $('#i1').css({
               left:X,top:Y 
           });
       });
    });
    $('#i1').mouseup(function () { 
        $(document).mousemove().off();
    });
//	鼠标按下，鼠标移动，鼠标弹起构成元素拖到操作，后续粘贴复制。
	  $('#i2').mousedown(function (e) { 
        OX=$(this).offset().left;
        OY=$(this).offset().top;
        OEX=e.pageX;
        OEY=e.pageY;
        $(document).mousemove(function (e) { 
            X=OX+e.pageX-OEX+'px';
            Y=OY+e.pageY-OEY+'px';
           $('#i2').css({
               left:X,top:Y 
           });
       });
    });
    $('#i2').mouseup(function () { 
        $(document).mousemove().off();
    });
	  $('#i3').mousedown(function (e) { 
        OX=$(this).offset().left;
        OY=$(this).offset().top;
        OEX=e.pageX;
        OEY=e.pageY;
        $(document).mousemove(function (e) { 
            X=OX+e.pageX-OEX+'px';
            Y=OY+e.pageY-OEY+'px';
           $('#i3').css({
               left:X,top:Y 
           });
       });
    });
    $('#i3').mouseup(function () { 
        $(document).mousemove().off();
    });
	  $('#i4').mousedown(function (e) { 
        OX=$(this).offset().left;
        OY=$(this).offset().top;
        OEX=e.pageX;
        OEY=e.pageY;
        $(document).mousemove(function (e) { 
            X=OX+e.pageX-OEX+'px';
            Y=OY+e.pageY-OEY+'px';
           $('#i4').css({
               left:X,top:Y 
           });
       });
    });
    $('#i4').mouseup(function () { 
        $(document).mousemove().off();
    });
	  $('#i5').mousedown(function (e) { 
        OX=$(this).offset().left;
        OY=$(this).offset().top;
        OEX=e.pageX;
        OEY=e.pageY;
        $(document).mousemove(function (e) { 
            X=OX+e.pageX-OEX+'px';
            Y=OY+e.pageY-OEY+'px';
           $('#i5').css({
               left:X,top:Y 
           });
       });
    });
    $('#i5').mouseup(function () { 
        $(document).mousemove().off();
    });
	  $('#i6').mousedown(function (e) { 
        OX=$(this).offset().left;
        OY=$(this).offset().top;
        OEX=e.pageX;
        OEY=e.pageY;
        $(document).mousemove(function (e) { 
            X=OX+e.pageX-OEX+'px';
            Y=OY+e.pageY-OEY+'px';
           $('#i6').css({
               left:X,top:Y 
           });
       });
    });
    $('#i6').mouseup(function () { 
		 OX=$(this).offset().left;
		 OY=$(this).offset().top;
        $(document).mousemove().off();
    });
	$('#ly').click(function () { 
	          $('#bd').fadeIn(1000);
	          $('.zz').fadeIn();
	});
	$('.zz').click(function () {
	         $('#bd').fadeOut();
	         $('.zz').fadeOut();
	})
	$('#tj').click(function () {
		if($('#i6 p').text()==''){
			$('#i6 .mz').text($('#mz').val());
			$('#i6 .nr').text($('textarea').val());
		    $('#mz').val('');
		    $('textarea').val('');}
		if($('#i6 p').text()!=''&&$('#i5 p').text()==''){ 
			$('#i5 .mz').text($('#mz').val());
			$('#i5 .nr').text($('textarea').val());
		    $('#mz').val('');
		    $('textarea').val('');  }
		if($('#i5 p').text()!=''&&$('#i4 p').text()==''){ 
			$('#i4 .mz').text($('#mz').val());
			$('#i4 .nr').text($('textarea').val());
		    $('#mz').val('');
		    $('textarea').val('');  }
		if($('#i4 p').text()!=''&&$('#i3 p').text()==''){ 
			$('#i3 .mz').text($('#mz').val());
			$('#i3 .nr').text($('textarea').val());
		    $('#mz').val('');
		    $('textarea').val('');  }
		if($('#i3 p').text()!=''&&$('#i2 p').text()==''){ 
			$('#i2 .mz').text($('#mz').val());
			$('#i2 .nr').text($('textarea').val());
		    $('#mz').val('');
		    $('textarea').val('');  }
		if($('#i2 p').text()!=''&&$('#i1 p').text()==''){ 
			$('#i1 .mz').text($('#mz').val());
			$('#i1 .nr').text($('textarea').val());
		    $('#mz').val('');
		    $('textarea').val('');  }
		$('#bd').fadeOut();
		$('.zz').fadeOut();
	})
})
