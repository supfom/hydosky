'use strict';
$(function(){
  /*给移动的元素添加宽*/
  var hlWith = getParentW($('.his-box .his-list'),'.his-item');
  $('.his-box .his-list').css("width",hlWith);

  $('.his-box .his-item>ul').each(function(index,element){
   $(element).css("width",getParentW($(element),'li'));
   /*如果事件列表只有一个，隐藏掉左右按钮*/
   if($(element).children().length == 1){
    $(element).siblings('.mybtn').hide();
   }
  })
  /*事件列表切换*/
  var smalln = 0;
  $('.his-item .btn-l').on('click',function(){
    var liLength = $(this).siblings('ul').children().length;
    var liWidth = $(this).siblings('ul').children('li')[0].clientWidth;
    console.log(liLength);
    console.log(liWidth);
    smalln--;
    if(smalln < 0){
      smalln = liLength-1;
    }
    $(this).siblings('ul').animate({'left': -smalln*liWidth+'px',},600);
  })
  $('.his-item .btn-r').on('click',function(){
    var liLength = $(this).siblings('ul').children().length;
    var liWidth = $(this).siblings('ul').children('li')[0].clientWidth;
    smalln++;
    if(smalln > liLength-1){
      smalln = 0;
    }
    $(this).siblings('ul').animate({'left': -smalln*liWidth+'px',},600);
  })
  /*时间列表切换*/
  var yearn = 0;
  var zindex = 0;
  var lineLi = $('.timeline>ul>li').length;
  var lineTranx = lineLi*2;
  console.log(lineTranx)
  $('.timeline>ul .linescale').css("transform","scaleX("+1/lineTranx+")");
  /*console.log(linescale);*/
  $('.timeline>ul>li').on('click',function(){

    $(this).addClass('current').siblings().removeClass("current");
    var listItemW = $('.his-list').children('.his-item')[0].clientWidth;
    zindex++;
    $('.his-list').animate({'left': -$(this).index()*listItemW+'px',},600);
    $('.timeline>ul .linescale').css("transform","scaleX("+(1/lineTranx+$(this).index()*2/lineTranx)+")");
  })
  /*时间列表超出屏幕宽度时设置一行显示 滑动*/
  var timewidth = getParentW($('.timelineul'),'li');
  $('.timelineul').css({'width':timewidth,'margin':'0 auto'})
  // 此时width等于所有LI的宽度总和
  // 判断当前UL的宽度是否超出屏幕，如果超出就显示横向滚动条
  if (timewidth > $(window).width()) {
    $('.timelineul').parent().css('overflow-x', 'scroll');
  }
});