/**
 * 秒杀功能
 * html: <div class="time-box" id="time-box"> <span class="day"> </span>天 <span class="hour"> </span>时 <span class="minute"> </span>分 <span class="second"> </span>秒 </div>
 * 调用: countDown.start("2014/3/8 12:00:00","#time-box");
*/
define(['jquery'],function ($){
    function start(time,id){
        var day_elem = $(id).find('.day'),
		 	hour_elem = $(id).find('.hour'),
		    minute_elem = $(id).find('.minute'),
			second_elem = $(id).find('.second'),
			end_time = new Date(time).getTime(),
			sys_second = (end_time-new Date().getTime())/1000;
	
		var timer = setInterval(function(){
			if (sys_second > 1) {
				sys_second -= 1;
				var day = Math.floor((sys_second / 3600) / 24);
				var hour = Math.floor((sys_second / 3600) % 24);
				var minute = Math.floor((sys_second / 60) % 60);
				var second = Math.floor(sys_second % 60);
				day_elem && $(day_elem).text(day);//计算天
				$(hour_elem).text(hour<10?"0"+hour:hour);//计算小时
				$(minute_elem).text(minute<10?"0"+minute:minute);//计算分钟
				$(second_elem).text(second<10?"0"+second:second);//计算秒杀
			} else { 
				clearInterval(timer);
				$(day_elem).text('00');
				$(hour_elem).text('00')
				$(minute_elem).text('00')
				$(second_elem).text('00');
			}
		}, 1000);
    }
 
    return{
        start : start
    };
 
})