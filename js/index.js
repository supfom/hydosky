/**
 * Created by zn on 2016/11/30.
 */
'use strict';

$(function() {
    // 当文档加载完成才会执行
    /**
     * 根据屏幕宽度的变化决定轮播图片应该展示什么
     * @return {[type]} [description]
     */
    function resize() {
        // 获取屏幕宽度
        var windowWidth = $(window).width();
        // 判断屏幕属于大还是小
        var isSmallScreen = windowWidth < 768;
        // 根据大小为界面上的每一张轮播图设置背景
        // $('#index_banner > .carousel-inner > .item') // 获取到的是一个DOM数组（多个元素）
        $('#index_banner > .carousel-inner > .item').each(function(i, item) {
            // 因为拿到是DOM对象 需要转换
            var $item = $(item);
            // var imgSrc = $item.data(isSmallScreen ? 'image-xs' : 'image-lg');
            var imgSrc =
                isSmallScreen ? $item.data('image-xs') : $item.data('image-lg');

            // 设置背景图片
            $item.css('backgroundImage', 'url("' + imgSrc + '")');
            //
            // 因为我们需要小图时 尺寸等比例变化，所以小图时我们使用img方式
            if (isSmallScreen) {
                $item.html('<img src="' + imgSrc + '" alt="" />');
            } else {
                $item.empty();
            }
        });
    }

    $(window).on('resize', resize).trigger('resize');

    // 1. 获取手指在轮播图元素上的一个滑动方向（左右）

    // 获取界面上的轮播图容器
    var $carousels = $('.carousel');
    var startX, endX;
    var offset = 50;
    // 注册滑动事件
    $carousels.on('touchstart', function(e) {
        // 手指触摸开始时记录一下手指所在的坐标X
        startX = e.originalEvent.touches[0].clientX;
        // console.log(startX);
    });

    $carousels.on('touchmove', function(e) {
        // 变量重复赋值
        endX = e.originalEvent.touches[0].clientX;
        // console.log(endX);
    });
    $carousels.on('touchend', function(e) {
        console.log(e);
        // 结束触摸一瞬间记录最后的手指所在坐标X
        // 比大小
        // console.log(endX);
        // 控制精度
        // 获取每次运动的距离，当距离大于一定值时认为是有方向变化
        var distance = Math.abs(startX - endX);
        if (distance > offset) {
            // 有方向变化
            // console.log(startX > endX ? '←' : '→');
            // 2. 根据获得到的方向选择上一张或者下一张
            //     - $('a').click();
            //     - 原生的carousel方法实现 http://v3.bootcss.com/javascript/#carousel-methods
            $(this).carousel(startX > endX ? 'next' : 'prev');
        }
    });

    /*公司历程*/
    (function(){
        // 获取屏幕宽度
        var windowWidth = $(window).width();
        // 判断屏幕属于大还是小
        if(windowWidth<992){
            if(windowWidth<414){
                history(
                {"width":"30%" ,"height":131 , "top":100 , "left": "10%" ,"opacity":0},
                {"width":"80%", "height":180,  "top":40,     "left": "0%","opacity":1},
                {"width":"90%", "height":220,  "top":20,     "left": "5%","opacity":1},
                {"width":"80%", "height":180,  "top":40,     "left": "20%","opacity":1},
                {"width":"30%" ,"height":131 , "top":100 ,   "left": "40%","opacity":0}
                );
            }else{
                history(
                {"width":"30%" ,"height":131 , "top":100 , "left": "10%" ,"opacity":0},
                {"width":"80%", "height":224,  "top":40,     "left": "0%","opacity":1},
                {"width":"80%", "height":270,  "top":20,     "left": "10%","opacity":1},
                {"width":"80%", "height":224,  "top":40,     "left": "20%","opacity":1},
                {"width":"30%" ,"height":131 , "top":100 ,   "left": "40%","opacity":0}
                );
            }

        }else{
           history(
            {"width":"30%" ,"height":131 , "top":100 , "left": "10%" ,"opacity":0},
            {"width":"40%", "height":224,  "top":40,     "left": "15%","opacity":1},
            {"width":"50%", "height":270,  "top":20,     "left": "25%","opacity":1},
            {"width":"40%", "height":224,  "top":40,     "left": "45%","opacity":1},
            {"width":"30%" ,"height":131 , "top":100 ,   "left": "40%","opacity":0}
            );
        }

        })();
});
function history(s0,s1,s2,s3,s4){
    var shijian = 500;
          var jiangeshijian = 1500;   //自动轮播的时间
          var nowimg = 0;
          var lock = false;
          var mytimer = 0;
          /*var s0 = {"width":"30%" ,"height":131 , "top":100 , "left": "10%" ,"opacity":0}
          var s1 = {"width":"40%", "height":224,  "top":40,     "left": "15%","opacity":1}
          var s2 = {"width":"50%", "height":270,  "top":20,     "left": "25%","opacity":1}
          var s3 = {"width":"40%", "height":224,  "top":40,     "left": "45%","opacity":1}
          var s4 = {"width":"30%" ,"height":131 , "top":100 ,   "left": "40%","opacity":0}*/
           $(".rightbut").click(
               function(){
                   if(!$("#images ul li").is(":animated") || lock){
                       //折腾信号量
                       if(nowimg < $("#images ul li").length - 1){
                           nowimg += 1;
                       }else{
                           nowimg = 0;
                       }
                       //设置小圆点：
                       $("#xiaoyuandian ul").animate({"left":nowimg*-70+'px'});
                       $("#xiaoyuandian ul li").eq(nowimg).addClass("cur").siblings().removeClass("cur");
                       //先交换位置、状态
                       $(".img-l1").animate(s0,shijian);
                       $(".img-c").animate(s1,shijian);
                       $(".img-r1").animate(s2,shijian);
                       $(".img-r2").animate(s3,shijian);
                       $(".img-l2").css(s4);
                       //控制遮罩：
                       $(".img-r1 .zhezhao").animate(
                           {
                               "opacity":0
                           },shijian
                       );
                       //控制遮罩：
                       $(".img-c .zhezhao").animate(
                           {
                               "opacity":0.6
                           },shijian
                       );
                       //交换身份
                       $(".img-l2").attr("class","denghou");
                       $(".img-l1").attr("class","img-l2");
                       $(".img-c").attr("class","img-l1");
                       $(".img-r1").attr("class","img-c");
                       $(".img-r2").attr("class","img-r1");


                       //交换身份要有一个经典算法：
                       if($(".img-r1").next().length != 0){
                           $(".img-r1").next().attr("class","img-r2");
                       }else{
                           $("#images ul li:first").attr("class","img-r2");
                       }
                       //下面这句话是为了保险起见
                       $(".img-r2").css(s4);
                   }
               }
           );

           $(".leftbut").click(
               function(){
                   if(!$("#images ul li").is(":animated") || lock){
                       //折腾信号量
                       if(nowimg > 0){
                           nowimg = nowimg - 1;
                       }else{
                           nowimg = $("#images ul li").length - 1;
                       }
                       //设置小圆点：
                       $("#xiaoyuandian ul").animate({"left":nowimg*-70+'px'});
                       $("#xiaoyuandian ul li").eq(nowimg).addClass("cur").siblings().removeClass("cur");

                       $(".img-l2").animate(s1,shijian);
                       $(".img-l1").animate(s2,shijian);
                       $(".img-c").animate(s3,shijian);
                       $(".img-r1").animate(s4,shijian);
                       $(".img-r2").css(s0);

                       //控制遮罩：
                       $(".img-l1 .zhezhao").animate(
                           {
                               "opacity":0
                           },shijian
                       );
                       //控制遮罩：
                       $(".img-c .zhezhao").animate(
                           {
                               "opacity":0.6
                           },shijian
                       );

                       $(".img-r2").attr("class","denghou");
                       $(".img-r1").attr("class","img-r2");
                       $(".img-c").attr("class","img-r1");
                       $(".img-l1").attr("class","img-c");
                       $(".img-l2").attr("class","img-l1");
                       if($(".img-l1").prev().length != 0){
                           $(".img-l1").prev().attr("class","img-l2");
                       }else{
                           $("#images li:last").attr("class","img-l2");
                       }
                       $(".img-l2").css(s0);
                   }
               }
           );

           $("#xiaoyuandian ul li").click(
               function(){
                   //这是上帝的后门：
                   lock = true;
                   //先让小圆点的时间变为100毫秒
                   shijian = 100;
                   //判断应该模拟点击左按钮还是右按钮
                   if($(this).index() > nowimg){
                       var cishu = $(this).index() - nowimg;
                       for(var i = 1 ; i <= cishu ; i = i + 1){
                           $(".rightbut").trigger("click");
                       }
                   }else{
                       var cishu = nowimg - $(this).index();
                       for(var i = 1 ; i <= cishu ; i = i + 1){
                           $(".leftbut").trigger("click");
                       }
                   }
                   //再把后门关上：
                   lock = false;
                   shijian = 500;

                   nowimg = $(this).index();
                   //设置小圆点：
                   $("#xiaoyuandian ul li").eq(nowimg).addClass("cur").siblings().removeClass("cur");
               }
           );
}


