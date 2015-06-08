/**
 * 大转盘抽奖功能
 * <div class="dzp">
        <div id="disk"></div>
        <div id="start"><img src="start.png" id="startbtn"></div>
   </div>
 * 调用方式：lottery.start();
 */

var json={"angle":"178","prize":"一等奖"};
define(['jquery','jQueryRotate','jqueryEasing'],function($,rotate,easing){
		$("#disk").rotate(0);//指到零的位置
        function start(){
        	window.setTimeout(function(){
        		$.ajax({
					type: 'POST',
					url: 'http://www.baidu.com',
					dataType: 'json',
					cache: false,
					error: function(){
						//alert('网络好像有点问题！');
					},
					beforeSend: function(){
						//  var a = Math.floor(Math.random() * 360); //生成随机数 
                         var a=Number(json.angle);
						 
						$("#disk").rotate({
									duration:2000, //转动时间
									angle: 0,
					            	animateTo:720+a, //转动角度
									easing: $.easing.easeOutSine,//easeOutSine
									callback: function(){
										if(json.prize==undefined){
											alert('不好意思，没中奖');
										}else{
											alert('恭喜你，你的奖品是==》'+json.prize);
										}
										
									//alert("you win");
										$("#startbtn").removeClass('click');
									}
						})
					},
					success:function(json){
						/**
						$("#startbtn").addClass('click');
						var a = json.angle, //角度
						 	p = json.prize, //奖项
						 	h = $(window).height(),
							bh = $('.box-twocontent').height(),
							w = $(window).width(),
							wh = $('.box-twocontent').width();  

							$("#disk").rotate({
									duration:6000, //转动时间
									angle: 0,
					            	animateTo:2160+a, //转动角度
									easing: $.easing.easeOutSine,//easeOutSine
									callback: function(){
										$('.box-twocontent').css({ 
					  						'top': (h-bh)/2 +'px',
											'left' : (w-wh)/2 +'px'			
					  					})
					  					$('body').on('touchmove',pd);

								        //阻止拖动
								        function pd(event){
								          event.preventDefault();
								        }
					  					$('.back-layer,.box-twocontent').show();
										$('#prizetype').text(p);
										$("#startbtn").removeClass('click');

										$('.close').on('click', function(event) {
											$('.back-layer,.box-twocontent').hide();
											$('body').off('touchmove',pd);
										});
									}
							})**/

					}
				})	
			},200);

		}

    return{
        start : start
    };

})
