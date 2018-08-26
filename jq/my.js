/*
* @Author: admin
* @Date:   2018-08-12 10:52:51
* @Last Modified by:   admin
* @Last Modified time: 2018-08-24 16:36:22
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
$('.hm-subnav-list>ul>li').mouseenter(function(event) {
	$(this).children('a').css("color","#df0012");
	$(this).siblings('').children('a').css("color","#fff");
});
$('.bar').children('img').click(function(){
	$('.bar_list').toggle();

})
/*$('.bar_list').siblings().click(function(){
	$('.bar_list').hide();
})*/
$('.list_title .span_bar').click(function(event) {
	$('.aside_pic .bar_list').hide();

});
$('.part>ul>li').click(function(){
	$(this).addClass('current').siblings().removeClass('current');
	$(this).css({'color':'#fff'},{'font-weight':'700'}).siblings().css('color','#424242');
	var index=$(this).index();
	$('.part_wold div').eq(index).show();
	$('.part_wold>div').eq(index).siblings().hide()
})
$('.hm-articles>.list>li').click(function(){
	$(this).addClass('current').siblings().removeClass('current');
	var index=$(this).index();
	$('.odiv>div').eq(index).show().siblings().hide();
})
var num=0;
var timee;
var n=0;
function fun(){
	clearInterval(timee);
	timee=setInterval(function(){
	num=num+1;
	if(num==6){
           n=0;
           $('.slideshow ol li').eq(n).addClass('current').siblings('').removeClass('current');
          
       }
	if(num>6)
	{
		num=0; 
           $('.slideshow ul').css('left', -740*num+'px'); 
           num=1;
	}
	
    $('.slideshow ol li').eq(num).addClass('current').siblings('').removeClass('current');
	$('.slideshow ul').animate({'left':-740*num+'px'})
	
},2000);	
}
fun();
$('.slideshow').hover(function() {		
	clearInterval(timee);
}, function() {
	fun();
});
var timer_3;
$('.slideshow .right').click(function(){
	clearTimeout(timer_3);
	timer_3=setTimeout(function(){
	num=num+1;
	if(num==6){
           n=0;
           $('.slideshow ol li').eq(n).addClass('current').siblings('').removeClass('current');
       }
	if(num>6)
	{
		num=0; 
           $('.slideshow ul').css('left', -740*num+'px'); 
           num=1;
	}
	
    $('.slideshow ol li').eq(num).addClass('current').siblings('').removeClass('current');
	$('.slideshow ul').animate({'left':-740*num+'px'})
	},200);
})
$('.slideshow .left').click(function(){
	clearTimeout(timer_3);
	timer_3=setTimeout(function(){
	num=num-1;
	if(num<0)
	{
		num=6;
        $('.slideshow ul').css('left', -740*num+'px'); 
        num=5;
	}
	$('.slideshow ul').animate({'left':-740*num+'px'})
    $('.slideshow ol li').eq(num).addClass('current').siblings('').removeClass('current');
},200);
})
	
 $('.slideshow ol li').click(function(event) {
        num=$(this).index();
        $('.slideshow ul').css('left', -num*740+'px');
        $(this).addClass('current');
        $(this).siblings().removeClass('current');
})
 $('.bar_2').mouseenter(function(){
 	$('.aside_ewm').show();
 })
 $('.bar_2').mouseleave(function(event) {
 	$('.aside_ewm').hide();
 });
 $(window).scroll(function(event) {
 	if($(window).scrollTop()>=$(window).height()){
 		$('.aside_pic').show()
 	}else{
 		$('.aside_pic').hide()
 	}
 });
 $('.return_top').click(function(){
 	$('html,body').animate({'scrollTop':'0px'}, 500)
 })
$('.draw-left ul li').mouseenter(function(){
	$(this).children('img').css({"opacity":"0.4","transform":"scale(1.1)","transition":"0.3s"});
	$(this).children('.ch').show()
})
$('.draw-left ul li').mouseleave(function(){
	$(this).children('img').css({"opacity":"1","transform":"scale(1)"})
	$(this).children('.ch').hide()
})
$('.draw-mid ul li').hover(function() {
	$(this).children('img').css({"opacity":"0.4","transform":"scale(1.1)","transition":"0.3s"});
	$(this).children('p').show()
}, function() {
	$(this).children('img').css({"opacity":"1","transform":"scale(1)"})
	$(this).children('p').hide()
});
$('.row ul p').hover(function() {
	$(this).css('color','#df0012')
}, function() {
	$(this).css('color','#333')
});
$('.game p').hover(function() {
	$(this).css('color','#df0012');
}, function() {
	$(this).css('color','');
});
$('.travel .img-top li').hover(function() {
	$(this).children('img').css({"opacity":"0.4","transform":"scale(1.1)","transition":"0.3s"});
	$(this).children('p').show()
}, function() {
	$(this).children('img').css({"opacity":"1","transform":"scale(1)"})
	$(this).children('p').hide()
});
/*骑闻频道、知识频道、产业*/
$('.line-img .top').hover(function() {
	$(this).children('img').css({"transform":"scale(1.1)","transition":"0.3s"})
}, function() {
	$(this).children('img').css("transform","scale(1)")
});
$('.line-img ul li').hover(function() {
	$(this).children('img').css({"opacity":"0.4","transform":"scale(1.1)","transition":"0.3s"});
	$(this).children('p').show()
}, function() {
	$(this).children('img').css({"opacity":"1","transform":"scale(1)"})
	$(this).children('p').hide()
});
$('.line-wold ul h3').hover(function() {
	$(this).css("color","#df0012")
}, function() {
	$(this).css("color","")
});
/*优选、最新、专题栏*/
$('.part_wold ul a').hover(function() {
	$(this).css('color','#df0012')
}, function() {
	$(this).css('color','')
});

$('.part_wold .special p').hover(function() {
	$(this).css('color','#df0012')
}, function() {
	$(this).css('color','')
});
