var lbt=document.querySelectorAll('.lbt a div');
var lbd=document.querySelectorAll('.lbt .d li');
var windows=document.querySelector('.lbt');
var xlcd=document.querySelectorAll('.lbt .xlcd li');
var yhl=document.querySelector('.lbt .yhl');
var zd=document.querySelector('.zd');
var dhfixed=document.querySelector('.dhfixed')
var k=document.querySelectorAll('.k');
var num=0;
//轮播图
function change(){
    for(var i=0;i<lbt.length;i++){
        lbd[i].style.background='#a5acab';
        lbt[i].style.opacity=0;
    }
        animate(lbt[num],{opacity:1},300,Tween.Linear);
        lbd[num].style.background='cornsilk';
}
var t=setInterval(move,3000);
function move() {
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
for (let j=0; j<lbd.length; j++) {
   lbd[j].onclick=function(){
       if(!flag){return} 
       flag=false;
       num=j;
       change();
   }
}
   //下拉菜单
   for(i=0;i<xlcd.length;i++){
       xlcd[i].onmouseover=function () {
           yhl.style.display='block';
       }
   }
   yhl.onmouseout=function() {
       this.style.display='none';
   }
   windows.addEventListener('mouseout',yc,false)
   function yc() {
       yhl.style.display='none';
   }
  //隐藏部分导航栏
  window.onscroll=function() {
      if(document.documentElement.scrollTop>700){
          zd.style.transform='scale(1,1)';
          dhfixed.style.display='block';
      } else{
        zd.style.transform='scale(0,0)';
        dhfixed.style.display='none';
          }     
  }
  //选项卡
  var xx=document.querySelectorAll('main .second .right div:first-child div:first-child div');
  var nr=document.querySelectorAll('main .second .right div:first-child div:nth-child(2) div');
  for(let i=0;i<xx.length;i++){
      xx[i].onclick=function(){
          for(var j=0;j<xx.length;j++){
          xx[j].style.background='none';  
          nr[j].style.display='none';
          }
          xx[i].style.background='yellowgreen'; 
          nr[i].style.display='block'
      }
  }