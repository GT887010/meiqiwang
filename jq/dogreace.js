/*
* @Author: admin
* @Date:   2018-08-17 21:35:05
* @Last Modified by:   admin
* @Last Modified time: 2018-08-21 17:02:00
*/

$('.header .left li').hover(function() {
	$(this).css({"background":"#006eac"},{"color":"#fff"})
}, function() {
	$(this).css({"background":""})
});
var num=0;
var timee;
var n=0;
function fun(){
	clearInterval(timee);
	timee=setInterval(function(){
	num=num+1;
	if(num==4){
           n=0;

           $('.slider ol li').eq(n).addClass('current').siblings('').removeClass('current');
   		
       }
	if(num>4)
	{
		num=0; 
           $('.slider ul').css('left', -946*num+'px'); 
           
           num=1;
	}
	
    $('.slider ol li').eq(num).addClass('current').siblings('').removeClass('current');
   
	$('.slider ul').animate({'left':-946*num+'px'})
	


},2000);	
}
fun();
$('.slider').hover(function() {		
	clearInterval(timee);
}, function() {
	fun();
});
 $('.slider ol li').click(function(event) {
        num=$(this).index();
        $('.slider ul').css('left', -num*946+'px');
        
        $(this).addClass('current');
        $(this).siblings().removeClass('current');
})
var pro={"contents":[{
    "src":"images/runlist1.jpg",
    "title":"深圳市美疆体育策划有限公司",
    "wold":"国内首家美景骑行赛专业服务公司，已推出环香格里拉，环新疆，岭南秀色等系列活动。",
    "math":"11"
},
{
    "src":"images/runlist2.png",
    "title":"广州朗途体育文化传播有限公司",
    "wold":"骑闯天路-G318川藏自行车极限赛（TIBET CHALLENGE），是第一场在中国景观大道G318川藏南线上举办的自行车极限耐力赛。",
    "math":"48"
},
{
    "src":"images/runlist3.png",
    "title":"美骑体育",
    "wold":"美骑网为骑行者提供自行车资讯、骑行路线、自行车评测导购、自行车商城、赛事活动、业界信息,是最快、最全、最专业的自行车门户网站,让更多人享受骑行乐趣。",
    "math":"93"
},
{
    "src":"images/runlist4.jpg",
    "title":"成都天空体育文化传播有限公司",
    "wold":"成都天空体育文化传播有限公司，是一个专门策划、组织大型体育活动、运动赛事、文化活动以及互联网推广的专业传播公司",
    "math":"1"
},
{
    "src":"images/runlist5.jpg",
    "title":"珠海景灵文化传播有限公司",
    "wold":"组织文化体育艺术交流活动，市场营销策划，体育赛事策划，公关活动组织策划，企业管理咨询，图文设计制作，摄影服务。",
    "math":"1"
},
{
    "src":"images/runlist6.jpg",
    "title":"博道体育",
    "wold":"用心为赛事服务",
    "math":"1"
},
{
    "src":"images/runlist7.jpg",
    "title":"张家界市自行车协会",
    "wold":"张家界市自行车协会是地区性自行车行业的社会团体组织，协会致力于开展骑行、登山、徒步、露营等户外活动，提供专业的体育赛事策划、运营、执行，媒体宣传等方案。",
    "math":"1"
},
{
    "src":"images/runlist8.png",
    "title":"滚石体育",
    "wold":"西安滚石体育文化传播有限公司是一家致力于综合新兴体育文化产品开发的体育文化公司",
    "math":"1"
},
{
    "src":"images/runlist9.jpg",
    "title":"山东领航体育文化发展有限公司",
    "wold":"主营：体育项目赛事的活动的组织与策划；健身服务；会议会展服务；文化交流活动的组织与策划；体育器材、文化用品、体育用品、健身器材、运动护具、纪念品、服装鞋帽、工艺美术品、自行车及配件、食品的批发与零售；体育设施安装等。",
    "math":"1"
}]}
 for(var i=0;i<pro.contents.length;i++){
                if(i==0){
                    $('.tabel li').children('.top').children('img').attr('src', pro.contents[i].src);
                    $('.tabel li').children('.top').children('.text').children('.title').html(pro.contents[i].title);
                    $('.tabel li').children('.top').children('.text').children('.wold').html(pro.contents[i].wold);
                }else{
                    var tag=$(' .tabel li').eq(0).clone(true);
                    tag.children('.top').children('img').attr('src', pro.contents[i].src);
                    tag.children('.top').children('.text').children('.title').html(pro.contents[i].title);
                    tag.children('.top').children('.text').children('.wold').html(pro.contents[i].wold);
                    tag.children('.bottom').children('span').html(pro.contents[i].math);
                    
                    $('.tabel').append(tag)
                }
            }

var pr={"details":[{
    			"src":"images/slirace1.jpg",
    			"title":"2018美骑100挑战者营地·脉动炽能量成都站",
    			
    			
    		},{
    			"src":"images/a3.jpg",
    			"title":"骑行圣湖——2018环羊卓雍措自行车公开赛",
    			"apply":"已结束",
    			"timestar":"2018-08-25 08:00",
    			"endtime":"2018-08-30 18:00",
    			"times":"2018-07-02 09:00",
    			"timee":"2018-08-23 00:00",
    			"live":"地点 : 山南市乃东区泽当镇湖南路25号",
    			"sponsor":"主办方 : 西藏自治区山南市人民政府",
    			"sales":"30",
    			"view":"3056"

    		},{
    			"src":"images/a4.jpg",
    			"title":"2018 年全国现代五项群众激光跑公开赛（云南站）",
    			"apply":"报名中",
    			"timestar":"2018-09-21 16:00",
    			"endtime":"2018-09-23 19:59",
    			"times":"2018-08-15 00:00",
    			"timee":"2018-09-01 23:59",
    			"live":"地点 : 大理州祥云县祥云一中",
    			"sponsor":"主办方 : 中国现代五项运动协会 云南省体育局",
    			"sales":"0",
    			"view":"75"

    		}
    		,{
    			"src":"images/a2.jpg",
    			"title":"2018年广东省（韶关·乳源）环南水湖 自行车公开赛",
    			"apply":"报名中",
    			"timestar":"2018-09-23 07:30",
    			"endtime":"2018-09-23 12:00",
    			"times":"2018-08-03 14:00",
    			"timee":"2018-09-09 12:00",
    			"live":"地点 : 乳源瑶族自治县体育馆",
    			"sponsor":"主办方 : 广东省社会体育中心",
    			"sales":"13",
    			"view":"11419"

    		},{
    			"src":"images/a4.jpg",
    			"title":"2018 年全国现代五项群众激光跑公开赛（云南站）",
    			"apply":"报名中",
    			"timestar":"2018-09-21 16:00",
    			"endtime":"2018-09-23 19:59",
    			"times":"2018-08-15 00:00",
    			"timee":"2018-09-01 23:59",
    			"live":"地点 : 大理州祥云县祥云一中",
    			"sponsor":"主办方 : 中国现代五项运动协会 云南省体育局",
    			"sales":"0",
    			"view":"75"

    		}
    		]}
 for(var i=0;i<pr.details.length;i++){
    			if(i==0){
    				$('.common li').children('a').children('img').attr('src', pr.details[i].src);
	    			$('.common li').children('.race-co').children('h3').html(pr.details[i].title);
	    			$('.common li').children('.bottom').children('.left').html(pr.details[i].price);
    			}else{
    				var tag=$(' .common li').eq(0).clone(true);
	    			tag.children('a').children('img').attr('src', pr.details[i].src);
	    			tag.children('.race-co').children('h3').html(pr.details[i].title);
	    			tag.children('.race-co').children('.wold').children('span').html(pr.details[i].apply);
	    			tag.children('.race-co').children('.status').children('.right').children('.top').html(pr.details[i].timestar);
	    			tag.children('.race-co').children('.status').children('.right').children('.bottom').html(pr.details[i].endtime);
	    			tag.children('.race-co').children('.status').children('.right').children('.times').html(pr.details[i].times);
	    			tag.children('.race-co').children('.status').children('.right').children('.timee').html(pr.details[i].timee);
	    			tag.children('.race-co').children('.live').html(pr.details[i].live);
	    			tag.children('.race-co').children('.sponsor').html(pr.details[i].sponsor);
	    			tag.children('.info').children('.infol').children('span').html(pr.details[i].sales);
	    			tag.children('.info').children('.infor').children('span').html(pr.details[i].view);
	    			
	    			
	    			$('.common').append(tag)
    			}
    		}
$('.page .page-item li').click(function(){
	$(this).addClass('current').siblings('').removeClass('current');
})
$(window).scroll(function(){
    if($(window).scrollTop()>=$(window).height()){
        $('.home-top').show();
    }else{
        $('.home-top').hide();
    }
});
 $('.home-top').click(function(){
    $('html,body').animate({'scrollTop':'0px'}, 500)
 })
 $('.feet').click(function(){
    $('.bar_list').toggle();
 })
 $('.list_title .span_bar').click(function(){
    $('.bar_list').hide();
 })

 $('.top-2>.left>li').click(function(){
    $(this).css({"background":"#006eac"},{"color":"#fff"}).siblings('').css({"background":"#007bbe"},{"color":"#bcd9ea"});
    $('.container>div').eq($(this).index()).show().siblings('').hide();
 })

$('.grade button').click(function(){
     var reg=true;
    if(user.value==''){
        usertip.innerHTML='证件号码不能为空';
        usertip.style.color='red';
        usertip.style.display="block";
        reg=false;
    }else{
        /*usertip.innerHTML='已填写';
        usertip.style.color='green';*/
        usertip.style.display='none';

    }
    return reg;
})
