/**
 * Created by zn on 2016/11/30.
 */
$(function(){
    /*$(window).scroll(function(){
        var srcTop = $(window).scrollTop();
        var ishas =$('#header+section').hasClass('mt80');*/
        /*console.log(ishas);*/
        /*if(ishas == false){
            if(srcTop >= $('#header+section').height()-80){
                $('#header').addClass('mainheader');
            }else{
                $('#header').removeClass('mainheader');
            }
        }

    })*/
    $('#team').on('click','.item-bottom .icon-down',function(){
        $(this).parents('.item').find('.detail').toggleClass('hide');
    })
    $('#faq').on('click','.item-bottom .icon-down',function(){
        $(this).parents('.item').find('.detail').toggleClass('hide');
    })
    /*移动端右侧导航*/
    var slideout = new Slideout({
      'panel': document.getElementById('panel'),
      'menu': document.getElementById('menu'),
      /*'side':'right',*/
      'padding': -256,
      'tolerance': 70
    });

    // Toggle button
    document.querySelector('.toggle-button').addEventListener('click', function() {
      slideout.toggle();
      $('#mask').toggle();
      $('#nav_list').hide();
    });

})
/*获取列表父亲元素的宽*/
function getParentW(parent,child,width){
    var width = width || 0; //父元素设置的padding或者margin
    // 遍历子元素
    if(parent){
        parent.children(child).each(function(index, element) {
            // console.log(element.clientWidth);
            // console.log($(element).width());
            width += element.clientWidth;
        });
    }
    return width;
}