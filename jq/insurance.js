/*
* @Author: lenovo
* @Date:   2018-08-18 16:15:51
* @Last Modified by:   lenovo
* @Last Modified time: 2018-08-20 08:55:57
*/

	//头部轮播图
		var timer;
		var sum=0
		timer=setInterval(function(){
			sum--;
			/*console.log(sum)*/
			if(sum<-3){
				sum=0;
				$('.carousel').css('left',sum+'00%');
				sum=-1;
			}
			$('.carousel').animate({'left':sum+'00%'});

		},2000)
	//导航栏控制下方内容    //点击更改导航栏样式：
		$('.nav_1').children('li').click(function(event) {
			//控制显示导航内容
				var index=$(this).index();
				/*console.log(index);*/
				$('.tab').eq(index).addClass('show').siblings().removeClass('show');

 

			//更改导航栏样式
				var num=index+1;
				var s='"images/icona0'+num+'.png"';
				/*console.log(s);*/
				$(this).addClass('active');
				$(this).siblings().removeAttr('style');
				$(this).siblings().removeClass('active');
					$('.active').css({
						'color':'white',
					'background':'#fb6c6c url('+s+') 20px center no-repeat'
				});
		});
	//侧边栏窗口滚动事件与鼠标移入事件	
	$(window).scroll(function(event) {
				var wh=$(window).scrollTop();
				if(wh>200){
					$('aside').fadeIn(500);
				}
				else{
					$('aside').fadeOut(500);
				}
	});



	$('.dh').hover(function() {
		$('.lxdh').show();
	}, function() {
		$('.lxdh').hide();
	});		

	$('.aside_ewm').hover(function() {
		$('.ewm_2').show();
	}, function() {
		$('.ewm_2').hide();
	});		


	//保单查询
	$('#zjhm').focus(function(event) {
			var tip=$('#zjhm').attr('placeholder');
			console.log(tip)
			if(tip=='投保人证件号码'){
				$('#zjhm').attr('placeholder','');
			}
	});
	$('#zjhm').blur(function(event) {
			var tip=$('#zjhm').attr('placeholder');
		if(tip==''){
				$('#zjhm').attr('placeholder','投保人证件号码');
			}
	});

	$('#dzyx').focus(function(event) {
			var tip=$('#dzyx').attr('placeholder');
			console.log(tip)
			if(tip=='投保人电子邮箱'){
				$('#dzyx').attr('placeholder','');
			}
	});
	$('#dzyx').blur(function(event) {
			var tip=$('#dzyx').attr('placeholder');
		if(tip==''){
				$('#dzyx').attr('placeholder','投保人电子邮箱');
			}
	});