/*
* @Author: lenovo
* @Date:   2018-08-13 17:43:58
* @Last Modified by:   lenovo
* @Last Modified time: 2018-08-24 10:49:55
*/



	//轮播图
	var timer;
		var sum=0;
		var timer_2;
		var timer_3;
		/*轮播图定时器*/
		function go(){
			timer=setInterval(function(){
				sum++;
				if(sum==4){
					sum=0;
					$('.pic').css('left',sum*-790+'px');

					sum=1;
				}
				if(sum==3){
					$('.point li').eq(0).addClass('cut').siblings().removeClass('cut');
				}
			$('.pic').animate({'left':sum*-790+'px'});
			$('.point li').eq(sum).addClass('cut').siblings().removeClass('cut');

			},3000)
		}
		go();
		$('.carousel').hover(function() {
			clearInterval(timer);
		}, function() {
			go();
		});															

		/*右下角点击控制图片*/
		$('ol li').click(function(event) {
				var a=$(this).index();
				$('.pic').animate({'left':a*-790+'px'});
				$(this).addClass('cut').siblings().removeClass('cut');
		});

		/*轮播图左右按钮控制图片*/
		var timer2;
		$('.left').click(function(event) {
			clearTimeout(timer2)
			 timer2=setTimeout(function(){
				sum=sum-1;
				if(sum==-1){
					sum=2;
				}
				$('.pic').animate({'left':sum*-790+'px'});
				$('ol li').eq(sum).addClass('cut').siblings().removeClass('cut');
			},210)
			
		});
		$('.right').click(function(event) {
			clearTimeout(timer2)
			 timer2=setTimeout(function(){
				sum=sum+1;
				if(sum==3){
					sum=0;
				}
				$('.pic').animate({'left':sum*-790+'px'});
				$('ol li').eq(sum).addClass('cut').siblings().removeClass('cut');
			},210)	
		});




		/*侧边栏窗口移动事件与点击事件*/
		$(window).scroll(function(event) {
				var wh=$(window).scrollTop();
				if(wh>200){
					$('aside').fadeIn(500);
				}
				else{
					$('aside').fadeOut(500);
				}
				console.log(wh);
		});

		$('.return_top').click(function(event) {
				$('html,body').animate({
					'scrollTop':'0'
				});
		});
	

		$('.bar_2').hover(function() {
			
			timer_3=setTimeout(function(){

				$('.aside_ewm').fadeIn(300);
			
			},200)
		}, 		function() {
			clearTimeout(timer_3);
			timer_2=setTimeout(function(){
				$('.aside_ewm').fadeOut(500);
			},200);
					
		});


			$('.aside_ewm').hover(function() {
				clearTimeout(timer_2);
				$('.aside_ewm').show();
		},
			 function() {
				$('.aside_ewm').fadeOut(500);
		});
		

		$('.bar').click(function(event) {
			event.stopPropagation()
				$('.yjfk').show();
		});
		$('.close').click(function(event) {
				$('.yjfk').hide();
		});
		$('body').click(function(event) {
				$('.yjfk').hide();
		});
		$('.yjfk').click(function(event) {
			event.stopPropagation()
	
		});
		
		function register(){
			var reg=true;
			var timer;
			var timer2;
			
			if($('#tit').val()==0||$('textarea').val()==0||$('#sub').val()==0){
				reg=false;
				$('.tip1').fadeIn(1000).fadeOut(1000);
			}else{
				
				if($('#sub').val().length<11||$('#sub').val().length>11){
					
					$('.tip3').show();
					reg=false;
				}
			}

			
 			if(reg==true){
 				$('.tip2').show();
 			}
 			
			
 			
 		
			return reg;
		}



		
		/*加载更多信息*/
		$('.loading_more').click(function(event) {
				$('.main_box_2').show();
		});

		/*窗口滚动加载信息*/

		$(window).scroll(function(event) {
				var hg=$(window).scrollTop();

				if(hg>2700&&hg<2800){

					setTimeout(function(){
						clearTimeout(timer_4);
						$('.main_box').show();
						$('.loading_more').show(300);
						
					},1000);

					var timer_4=setTimeout(function(){
					$('.loading_more').hide()
					$('.loading_pic').fadeIn(300).fadeOut(300);
					},20)
				
					
							
				}	
					
				
		});


		/*底部logo鼠标移入移出事件*/
		$('.weixin').hover(function() {
			$(this).children(0).show();
		}, function() {
			$(this).children(0).hide();
		});	

		$('.douyin').hover(function() {
			$(this).children(0).show();
		}, function() {
			$(this).children(0).hide();
		});	