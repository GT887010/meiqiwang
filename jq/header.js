/*
* @Author: admin
* @Date:   2018-08-20 17:44:49
* @Last Modified by:   admin
* @Last Modified time: 2018-08-22 23:00:00
*/

var arr=[10,7,6,5,4,5,6,0,3,8,5,3];
$('.hm-main>li').mouseenter(function(event) {
	$(this).addClass('current');
	$(this).siblings().removeClass('current');
	var index=$(this).index();
	$('.hm-subnav-list>ul').eq(index).show().css("width",$(this).length*124+"px").siblings().hide();
	$('.hm-subnav-list>ul').eq(index).show().css("width",arr[index]*124).siblings().hide();
});
$('.navright-icon>.list').hover(function() {
	$('.icon-list').css("display","block")
}, function() {
	$('.icon-list').hide();
});
$('.icon-list li').hover(function() {
	$(this).css("text-decoration","underline").siblings('').css("text-decoration","none")
}, function() {
});
$(document).click(function(e){
	console.log(e.target.className);
	if(e.target.className=="find-search"){
		$('.hm-search').show();
	}else if(e.target.className=="input-text"){
		/*e.stopPropagation();*/
		$('.hm-search').show();
	}else if(e.target.className=="input-search"){
		/*e.stopPropagation();*/
		$('.hm-search').show();
	}else{
		$('.hm-search').hide();
	}
});
$('.hm-subnav-list>ul>li').mouseenter(function(event) {
	$(this).css("color","#df0012").siblings('').css("color","#fff")
});