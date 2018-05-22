/*
 * @Author: seven.zhang 
 * @Date: 2018-04-28 14:29:07 
 * @Last Modified by: seven.zhang
 * @Last Modified time: 2018-05-10 16:12:55
 */

  // dr-common.js
// 常驻城市
    $('.title_wrap .city').on('click',function(){
        $(this).toggleClass('city_show');
    });
    $('.city_name_list').on('click','li',function(){
        $(this).parent().parent().find('.text_i').html($(this).html());
    })

    // tap栏
    $('.tap_tit .title').on('click',function(e) {
        $(this).addClass("tit_current").siblings().removeClass("tit_current");
        //针对的目标如果是同一个就可以通过链式编程连续书写
        //下面来完成li的工作
        var num=$(this).index()
        $(this).parent().parent().children('.tap_con').find('.tap_bcon').eq(num).show().siblings().hide();
    });


  //dr头部-下拉切换
 $('.an_header_bar').on('click',function(){
    $(this).parent().toggleClass('an_nav_current');
 });
 // dr头部-下拉选择
$('.tap_con_ul li').on('click',function(){
    $(this).parent().parent().parent().removeClass('an_nav_current');
});

//地图添加标注文字函数 
//地图添加标注函数 
 function addOverlayFun(map1,points){
    for (var i = 0; i < points.length; i++) {
    console.log(points[i].x);
    console.log(points[i].y);
        var point1 = new BMap.Point(points[i].x, points[i].y);
        var label1 = new BMap.Label(points[i].title,
            {
                offset:new BMap.Size(-25,-20),
                position:point1

            });
        // 样式设置
        label1.setStyle({
            width: "55px",
            height: "55px",
            color: '#fff',
            fontSize:'12px',
            background: 'rgba(95,94,217,0.7)',
            border:'0',
            borderRadius: "5px",
            textAlign: "center",
            borderRadius:'50%',
            lineHeight:'17px',
            wordWrap: 'break-word',
            whiteSpace: 'normal',
            display : 'flex',
            alignItems:'center'
            
        });  
       map1.addOverlay(label1);
    }
}

 /*
 * 头部楼盘切换 
 */
$('.head_tit').click(()=>{
    const dis=$('.lpCheck_wrap').css("display");
    $('.head_mask').hide();	
    if(dis=="none"){
        $('.lpCheck_wrap').show();
        $('.head_tit .icon').addClass('icon_up');
    }else{
        $('.lpCheck_wrap').hide();
        $('.head_tit .icon').removeClass('icon_up');
    };
});

/*
 * 头部导航 
 */
$('.drop_icon').click(()=>{
    const dis=$('.head_mask').css("display");
    $('.lpCheck_wrap').hide();
    $('.head_tit .icon').removeClass('icon_up');
    if(dis=="none"){
        $('.head_mask').show();	
    }else{
        $('.head_mask').hide();	
    };
});
// 子页选择
$(".droplist_01").click(function(){
    const child=this.children;
    const n=child.length;
    console.log(child)
    $(".arrow").removeClass("arrow_up");
    $(".sublist").hide();
    if(n===2){
        $(".droplist").removeClass("active");
        $(this).addClass("active");
        $('.head_mask').hide();
    }else if(n===3){
        this.children[2].classList.add("arrow_up");
        let id;
        const item=child[0].classList[1];
        switch(item){
            case "icon_02":
                id="#khfx_list";
                break;
            case "icon_03":
                id="#jpyj_list";
                break;
            case "icon_04":
                id="#qyyj_list";
                break;
        }
        $(id).show();
    };
});
$(".droplist_02").click(function(){
    $(".droplist").removeClass("active");
    $(this).addClass("active");
    $('.head_mask').hide();
});

/*
 * 移动端自适应 
 */
(function(d,c){
    var e=d.documentElement,
        a="orientationchange" in window?"orientationchange":"resize",
        b=function(){
            var f=e.clientWidth;
            if(!f){return}
            if(f>=750){
                e.style.fontSize="100px"
            }else{
                e.style.fontSize=100*(f/750)+"px"
            }
        };
        if(!d.addEventListener){return}
        b();
        c.addEventListener(a,b,false);
        d.addEventListener("DOMContentLoaded",b,false)
    }
)(document,window);
// var Dpr = 1, uAgent = window.navigator.userAgent;
// var isIOS = uAgent.match(/iphone/i// var isYIXIN = uAgent.match(/yixin/i);
// var is2345 = uAgent.match(/Mb2345/i);
// var ishaosou = uAgent.match(/mso_app/i);
// var isSogou = uAgent.match(/sogoumobilebrowser/ig);
// var isLiebao = uAgent.match(/liebaofast/i);
// var isGnbr = uAgent.match(/GNBR/i);
// function resizeRoot() {
//     var wWidth = (screen.width > 0) ? (window.innerWidth >= screen.width || window.innerWidth == 0) ? screen.width : window.innerWidth : window.innerWidth, wDpr, wFsize;
//     var wHeight = (screen.height > 0) ? (window.innerHeight >= screen.height || window.innerHeight == 0) ? screen.height : window.innerHeight : window.innerHeight;
//     if (window.devicePixelRatio) {
//         wDpr = window.devicePixelRatio;
//     } else {
//         wDpr = isIOS ? wWidth > 818 ? 3 : wWidth > 480 ? 2 : 1 : 1;
//     }
//     if (isIOS) {
//         wWidth = screen.width;
//         wHeight = screen.height;
//     }
//     if (wWidth > wHeight) {
//         wWidth = wHeight;
//     }
//     wFsize = wWidth > 1080 ? 144 : wWidth / 7.5;
//     wFsize = wFsize > 32 ? wFsize : 32;
//     window.screenWidth_ = wWidth;
//     if (isYIXIN || is2345 || ishaosou || isSogou || isLiebao || isGnbr) {//YIXIN 和 2345 这里有个刚调用系统浏览器时候的bug，需要一点延迟来获取
//         setTimeout(function () {
//             wWidth = (screen.width > 0) ? (window.innerWidth >= screen.width || window.innerWidth == 0) ? screen.width : window.innerWidth : window.innerWidth;
//             wHeight = (screen.height > 0) ? (window.innerHeight >= screen.height || window.innerHeight == 0) ? screen.height : window.innerHeight : window.innerHeight;
//             wFsize = wWidth > 1080 ? 144 : wWidth / 7.5;
//             wFsize = wFsize > 32 ? wFsize : 32;
//             document.getElementsByTagName('html')[0].style.fontSize = wFsize + 'px';
//         }, 500);
//     } else {
//         document.getElementsByTagName('html')[0].style.fontSize = wFsize + 'px';
//     }
//  }
// resizeRoot();


