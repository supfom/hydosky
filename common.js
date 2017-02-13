/*
* @Author: zn
* @Date:   2016-12-07 17:05:21
* @Last Modified by:   Marte
* @Last Modified time: 2016-12-07 17:13:53
*/

'use strict';
var $$ = function(){};
$$.prototype = {
    extend: function(tar,source){
        for(var i in source){
            tar[i] = source[i];
        }
        return tar;
    }
}
var $$ = new $$();

/*事件框架*/
var event = function(){};
event.prototype = {
    on:function(id,type,fn){

    }
}
$$.event = new event();