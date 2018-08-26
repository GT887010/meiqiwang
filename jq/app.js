/*
* @Author: lenovo
* @Date:   2018-08-23 09:02:49
* @Last Modified by:   lenovo
* @Last Modified time: 2018-08-23 15:18:52
*/


$('.circle').on('click', function(event) {
	var index=$(this).index();
	console.log(index)
	$(this).addClass('active').siblings().removeClass('active');
	$('section').animate({'top':-index+'00%'});
});

var timer;
var num=0;
// 滚动
$(document).mousewheel(function(e,b){
	// 向下滚动 b -1  向上滚动 b 1
	// 函数节流
	clearTimeout(timer)
	timer=setTimeout(function(){
		console.log(b)
		num=num-b
		if(num<0){
			num=0
		}
		if(num>3){
			num=3
		}
		$('.circle').eq(num).addClass('active').siblings().removeClass('active');
		$('section').stop().animate({'top':-100*num+'%'});	
	},100)
})