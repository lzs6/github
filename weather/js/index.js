$(function(){
    getDate();
    getToday();
    getWeek();
})

function getDate(){
    $.ajax({
        type:"get",
        url:"https://tianqiapi.com/api",
        data:{
            appid:"49924983",
            appsecret:"mxwQi3Vc",
            version:"v6",
        },
        success:function(res){
            $(".city").text(res.country);
            $(".place").text(res.city);
            $(".temp .now").text(res.tem+"°");
            $(".temp .today p").text(res.tem1+"°"+"~"+res.tem2+"°"+" "+res.wea);
            $(".temp .today img").attr("src","./img/"+res.wea_img+".png");
            $(".week").html(res.week+"<span>今天</span>");
        }
    })
}

function getImg(res){
    switch (res){
        case "晴":
            return "qing"
        case "多云":
            return "yun"
        case "阴":
            return "yin"
        case "小雨":
            return "yu"
    }
}

function getToday(){
    $.ajax({
        type:"get",
        url:"https://tianqiapi.com/api",
        data:{
            appid:"99486933",
            appsecret:"af13EFeX",
            version:"v1",
        },
        success:function(res){
            var hourList=res.data[0].hours;
            var str="";
            hourList.forEach(item=> {
                item.day=item.day.slice(3,6)
                str+=`
                <li>
                    <span>${item.day}</span>
                    <img src="./img/${getImg(item.wea)}.png" alt="">
                    <span>${item.tem}</span>
                </li>` 
            });
            $(".real ul").html(str);
        }
    })
}

function getWeek(){
    $.ajax({
        type:"get",
        url:"https://tianqiapi.com/api",
        data:{
            appid:"99486933",
            appsecret:"af13EFeX",
            version:"v1",
        },
        success:function(res){
            var dayList=res.data;
            var str="";
            dayList.forEach(item=> {
                str+=`
                    <li>
                        <span>${item.week}</span>
                        <img src="./img/${item.wea_img}.png" alt="">
                        <div class="numb">
                            <span>${item.tem1}</span>
                            <span>${item.tem2}</span>
                        </div>
                    </li>`
            });
            $(".thisWeek ul").html(str);
            setLife(res.data[0].index);
            setAir(res.data[0]);
        }
    })
}

function setLife(res){
    var str="";
    res.forEach(item=>{
        str+=`
        <div class="swiper-slide">
            <img src="./img/life_clothes.png" alt="">
            <div class="text">
                <div class="first">${item.title}</div>
                <p>${item.desc}</p>
            </div>
        </div>`
    })
    $(".swiper-wrapper").html(str); 
    
    var swiper = new Swiper('.swiper-container', {
        effect: 'coverflow',
        centeredSlides: true,
        spaceBetween: '18%',
        slidesPerView: 'auto',
        loop: true,
        coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 300,
            modifier: 1,
            slideShadows: false,
        }
    });
}

function setAir(res){
    var boxWidth=parseInt($(".air .quality").css("width"));
    var num=(res.air/boxWidth)*100+"%";
    $(".air .quality img").css("left",num);
}