/*
* @Author: lenovo
* @Date:   2018-08-22 11:53:44
* @Last Modified by:   lenovo
* @Last Modified time: 2018-08-24 11:08:07
*/

	function register(){

						var reg=true;
					var ps=$('#psw').val().length;
						if($('#user').val()==''){
							$('.usertip-1').fadeIn();
								$('.usertip-2').hide();
								reg=false;

						}else if($('#user').val().length<11||$('#user').val().length>11){
							$('.usertip-1').hide();
							$('.usertip-2').fadeIn();
							reg=false;
						} 
						if(ps==0){
							$('.pstip').fadeIn();
							reg=false;
						}
						return reg;
					
						
			};
		

			$('#user').focus(function(event) {
					$('.usertip-1').hide();
					$('.usertip-2').hide();
					$('.pstip').hide();
			});
			$('#psw').focus(function(event) {
					$('.usertip-1').hide();
					$('.usertip-2').hide();
					$('.pstip').hide();
			});
		
	
			$('#myModal').blur(function(event) {
				if ($('#myModal').css('display')=='none') {
					$('.usertip-1').hide();
					$('.usertip-2').hide();
					$('.pstip').hide();
					$('#user').val('');
					$('#psw').val('');
				}	
			});
			var timer;
			$('.icon-pic').hover(function() {
				$('.icon-tip').show();
			}, function(){
				timer=setTimeout(function(){
					$('.icon-tip').hide();
				},500)
					
			});	
			$('.icon-tip').mouseenter(function(event) {
				clearTimeout(timer);
					$('.icon-tip').show();
			});
			$('.icon-tip').mouseleave(function(event) {
					$('.icon-tip').hide();
			});

			$('.gzh').hover(function() {
				$('.popup-weixin').show();
			}, function() {
				$('.popup-weixin').hide();
			});
			$('.popup-weixin').hover(function() {
				$('.popup-weixin').show();
			}, function() {
				$('.popup-weixin').hide();
			});