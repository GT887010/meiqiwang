/*
* @Author: lenovo
* @Date:   2018-08-14 19:37:22
* @Last Modified by:   lenovo
* @Last Modified time: 2018-08-14 19:37:32
*/



	var timer;
			var num=0;
			var a=1;

			function go(){timer=setInterval(function(){
					num++;
					if(num==3){
						num=0;
					}
					$('header').children().eq(num).fadeIn();
					$('header').children().eq(num).siblings().hide();
				},3000)
			}
			go();

		function register(){
			var reg=true;
			if(user.value==''){
				user.style.background='rgba(226,25,24,0.6)';
				user.style.border='1px solid red';
				reg=false;
			}
			if(pass.value==''){
				pass.style.background='rgba(226,25,24,0.6)';
				pass.style.border='1px solid red';
				reg=false;
			} 
			if(inyzm.value==''){
				inyzm.style.background='rgba(226,25,24,0.6)';
				inyzm.style.border='1px solid red';
				reg=false;
			}
			if(reg==false){
				alert('请将信息填写完整');
			}
			return reg;
		}

		user.onblur=function(){
			if(user.value==''){
				user.style.background='rgba(226,25,24,0.6)';
				user.style.border='1px solid red';		
		}else{
			user.style.background='white';
				user.style.border='1px solid #acacac';
		}
		}
		pass.onblur=function(){
				if(pass.value==''){
					pass.style.background='rgba(226,25,24,0.6)';
					pass.style.border='1px solid red';		
			}else{
				pass.style.background='white';
				pass.style.border='1px solid #acacac';
			}
	
		}
		inyzm.onblur=function(){
				if(inyzm.value==''){
					inyzm.style.background='rgba(226,25,24,0.6)';
					inyzm.style.border='1px solid red';		
			}else{
				inyzm.style.background='white';
				inyzm.style.border='1px solid #acacac';
			}
	
		}
		$('#yzm').click(function(event) {
				a++;
					if(a==5){
						a=1;
					}
				
					$('#pic').attr('src','images/yzm'+a+'.png');

				console.log(a)
		});
