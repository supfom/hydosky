/*
* @Author: Marte
* @Date:   2016-12-09 17:29:45
* @Last Modified by:   Marte
* @Last Modified time: 2016-12-09 17:30:05
*/

'use strict';
$(function(){
  var proImgw = getParentW($('.pro-img>ul'),'li',30);
  $('.pro-img>ul').css({'width':proImgw});
  if (proImgw > $(window).width()) {
    $('.pro-img').css('overflow-x', 'scroll');
  }
})