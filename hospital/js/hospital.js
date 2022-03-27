//轮播图
var lbt=document.querySelectorAll('.lbt li');
var lbd=document.querySelectorAll('.lbd li');
var windows=document.querySelector('.winDow');
var num=0;
function change(){
    for (var i = 0; i < lbd.length; i++) {
        lbd[i].style.background='cadetblue';
        animate(lbt[i],{opacity:0},1000,Tween.Back.easeIn);
    }
    lbd[num].style.background='rgb(180, 60, 60)';
    animate(lbt[num],{opacity:1},1000,Tween.Back.easeIn);
}
var t=setInterval(move,3000)
function move(){
    num++;
    if(num==lbt.length){num=0;} 
    change();
}
windows.onmouseover=function(){
    clearInterval(t);
}
windows.onmouseout=function(){
  t=setInterval(move,3000);
}
var flag=true;
for (let j = 0; j < lbd.length; j++) {
   lbd[j].onclick=function(){
    if (!flag) {
        return;
    }
    flag=false;
    num=j;
    change();
   }
}
//导航栏
$('nav .nav>li').mouseover(function() {
    $(this).find('ul').fadeIn(100);
});
$('nav .nav>li').mouseleave(function () { 
    $(this).find('ul').fadeOut(100);
});
//选项卡1
$('main .lbt2 .rw li').click(function () { 
    var num=$(this).index();
    $('main .lbt2 div').eq(6-num).fadeIn(2000).siblings('div').fadeOut(1000);
;
})
//选项卡2
var xx0=document.querySelectorAll('.nr1 .left .left-x li');
var xx=document.querySelectorAll('.lbt2-x li');
var nr=document.querySelectorAll('.lbt2-x-k .k');
for(var i=0;i<xx.length;i++){//let i;
    xx[i].index=i;
    xx[i].onclick=function(){
        for(var j=0;j<xx.length;j++){
        xx[j].style.background='none';
        xx[j].style.color='rgb(31, 31, 138)';
        nr[j].style.display='none';  
        nr[this.index].style.display='block';
        // nr[i].style.display='block';
         this.style.background='rgb(31, 31, 138)';
         this.style.color='aliceblue';
    }      
    }
}
//选项卡3
for(var i=0;i<xx0.length;i++){//let i;
    xx0[i].index=i;
    xx0[i].onclick=function(){
        for(var j=0;j<xx0.length;j++){
        xx0[j].style.background='none';
        xx0[j].style.color='rgb(31, 31, 138)';
        // nr[i].style.display='block';
         this.style.background='rgb(31, 31, 138)';
         this.style.color='aliceblue';
    }      
    }
}