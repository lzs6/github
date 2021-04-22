$(function (){
    $('textarea').keyup(function () { //文本域已输入的文字个数
        $('.num').text(this.value.length)
    });
})
$('form').submit(function (e) { //提交事件
    e.preventDefault();
    r();
    document.querySelector('form').reset();//重置表单
    $('.num').text('0');
});
function r() {
    var obj={
        name:$('input:first').val(),
        tel:$('input').eq(1).val(),
        emal:$('input:nth-child(3)').val(),
        textarea:$('textarea').val()
    };
    $('ul').html(`
    <li class="left">
    <div class="first">
        <div class="tx" style="background: rgb(169, 176, 182);"></div>
    </div>
    <div class="second">
        <p>${obj.name}</p>
        <p>${time()}</p>
        <p>${obj.tel}</p>
        <p>${obj.emal}</p>
        <p>${obj.textarea}</p>
    </div>
</li>`+$('ul').html())
}//获取输入内容并转移
function time() { 
    var date=new Date();
    var y=date.getFullYear()
    ,m=date.getMonth()+1
    ,d=date.getDate()
    ,h=date.getHours()
    ,min=date.getMinutes()
    ,s=date.getSeconds();
    m=m<10?'0'+m:m;
    d=d<10?'0'+d:d;
    h=h<10?'0'+h:h;
    min=min<10?'0'+min:min;
    s=s<10?'0'+s:s;
    return y+'-'+m+'-'+d+'-'+h+':'+min+':'+s ;
}//获取提交时间
$(document).keydown(function (e) { 
    if(e.keyCode==13){
      $('form').submit();
    }
});//回车键提交

