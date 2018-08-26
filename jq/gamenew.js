/*
* @Author: admin
* @Date:   2018-08-23 11:26:39
* @Last Modified by:   admin
* @Last Modified time: 2018-08-24 16:08:05
*/

$('.ch-recom .left').hover(function() {
	$(this).children('img').css({"transform":"scale(1.1)","transition":"0.3s"})
}, function() {
	$(this).children('img').css({"transform":"scale(1)"})
});
$('.ch-recom .right li').hover(function() {
	$(this).children('img').css({"transform":"scale(1.1)","transition":"0.3s"})
}, function() {
	$(this).children('img').css({"transform":"scale(1)"})
});
$('.box-title>li').click(function(){
	$(this).addClass('current').siblings().removeClass('current');
})

var pro={"contents":[{
	"type":"| 赛事新闻 |",
	"title":"雅加达亚运男子公路大组赛：亚洲新车王卢琴科",
	"src":"images/new1.jpg",
	"desc":"哈萨克斯坦名将卢琴科冲刺险胜日本老将别府史之，赢得这个项目的金牌。",
	"time":"2018-08-23",
	"author":"作者：knightof1"
},{
	"type":"|  赛事新闻 |",
	"title":"王美银出战环德国",
	"src":"images/new2.jpg",
	"desc":"环德国即将于8月23日晚间正式开战，这也是王美银在意大利东双海赛之后，下半季回归欧陆赛场的第一场比赛！",
	"time":"2018-08-23",
	"author":"作者：美骑网编辑中心"
},{
	"type":"|  赛事新闻 |",
	"title":"2018环西参赛名单汇总",
	"src":"images/new3.jpg",
	"desc":"2018环西班牙公路自行车赛即将于本周末（8月25日）开赛，22支参赛车队陆续公布名单，汇总如下：",
	"time":"2018-08-23",
	"author":"作者：美骑网编辑中心"
},{
	"type":"|  赛事新闻 |",
	"title":"2018年第十三届华南赛12月1-2日盛大开启",
	"src":"images/new4.png",
	"desc":"于2005年创立的华南国际两轮极限运动邀请赛今年迎来它的第十三年，每年都会吸引国内外众多自行车极限运动爱好者前往位于广东东莞元渝机械公司的极限赛...",
	"time":"2018-08-22",
	"author":"作者：美骑网编辑中心"
},{
	"type":"|  赛事新闻 |",
	"title":"北京昌平铁人三项赛暨玄铁系列赛北京站圆满落幕",
	"src":"images/new5.jpg",
	"desc":"2018年8月19日是北京奥运会铁三赛成功举办整整10周年的日子，这一天万众期待的碧桂园2018北京昌平铁人三项赛暨玄铁系列赛北京站在昌平十三陵水库铁三赛...",
	"time":"2018-08-22",
	"author":" 作者：玄铁系列赛"
},{
	"type":"|  赛事新闻 |",
	"title":"视频｜九个山顶终点 2018环西路线再疯狂",
	"src":"images/new6.jpg",
	"desc":"环西班牙公路自行车赛在1月13日举行了新闻发布会。环西今年设置了9个山顶终点赛段，其中6个出现在最后8个赛段当中。今年环西最后阶段可谓是好戏连场，.",
	"time":"2018-08-22",
	"author":" 作者：Nel"
},{
	"type":"|  赛事新闻 |",
	"title":"雅加达亚运女子大组赛：罗雅凛单飞 普译娴夺银",
	"src":"images/new7.jpg",
	"desc":"韩国选手罗雅凛在最后时刻发动强力单飞夺冠。中国选手普译娴在随后的小集团冲刺力压日本选手与那岭惠理，拿下一面银牌。",
	"time":"2018-08-22",
	"author":"作者：knightof1"
},{
	"type":"|  赛事新闻 |",
	"title":"七彩云南格兰芬多丽江站：决战牦牛坪",
	"src":"images/new8.png",
	"desc":"大理环洱海结束之后，所有人将转场到丽江，11月10日格兰芬多第五站比赛将从丽江大研古城出发，以牦牛坪为终点，这过程中选手需要经过大爬升上坡以及长..",
	"time":"2018-08-22",
	"author":" 作者：诺迪维"
},{
	"type":"|  赛事新闻 |",
	"title":"亚运会捷报！中国山地车男队勇摘金银！",
	"src":"images/new9.jpg",
	"desc":"8月21日下午，2018雅加达亚运会山地自行车越野赛男子组的比赛结束，中国队的马皓和吕先景分获金、银！",
	"time":"2018-08-21",
	"author":"作者：Andy-亮"
},{
	"type":"|  赛事新闻 |",
	"title":"北京奥运铁三赛场迎来十周年文化展",
	"src":"images/new10.png",
	"desc":"北京奥运是一代人的记忆，这场中国“做东”的全球体育盛宴，不仅在世界运动史上写下了浓墨重彩的一笔，更展示了中国的崛起和日益强盛，让十三亿中华儿..",
	"time":"2018-08-21",
	"author":"作者：玄铁"
},{
	"type":"|  赛事新闻 |",
	"title":"亚运会捷报！中国山地车女队包揽金银",
	"src":"images/new11.png",
	"desc":"​8月21日上午，2018雅加达亚运会山地自行车越野赛女子组的比赛结束，中国队的姚变娃和李洪凤分获金、银！",
	"time":"2018-08-21",
	"author":" 作者：Andy-亮"
}]}

for(var i=0;i<pro.contents.length;i++){
                if(i==0){
                    $('.list-cloumn').children('.list-cloumn-img').children('img').attr('src', pro.contents[i].src);
                    $('.list-cloumn').children('.type').html(pro.contents[i].type);
                    $('.list-cloumn').children('.title').html(pro.contents[i].title);
                    $('.list-cloumn').children('.list-cloumn-p').children('.desc').html(pro.contents[i].desc);
                    $('.list-cloumn').children('.list-cloumn-p').children('.info').children('.time').html(pro.contents[i].time);
                    $('.list-cloumn').children('.list-cloumn-p').children('.info').children('.author').html(pro.contents[i].author)
                }else{
                    var tag=$('.list-cloumn').eq(0).clone(true);
                    tag.children('.list-cloumn-img').children('img').attr('src', pro.contents[i].src);
                    tag.children('.type').html(pro.contents[i].type);
                    tag.children('.title').html(pro.contents[i].title);
                    tag.children('.list-cloumn-p').children('.desc').html(pro.contents[i].desc);
                    tag.children('.list-cloumn-p').children('.info').children('.time').html(pro.contents[i].time);
                    tag.children('.list-cloumn-p').children('.info').children('.author').html(pro.contents[i].author)
                    $('.box-section>.current').append(tag)
                }
            }


