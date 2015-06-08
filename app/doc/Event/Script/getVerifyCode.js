/**
 * 获取验证码倒计时功能
 * html: <p>验证码 <b><input type="tel" name="" class="code" value="" placeholder="请输入验证码"></b> <b class="btn refresh disabled"><span class="second">s</span> 重新获取</b></p>
 * 调用: getVerifyCode.start();
*/
define(['jquery'],function ($){
    function start(){
       		var refreshBtn = $('.refresh'),second_elem = $('.second'),
       	   		sys_second = 60;
	
			var timer = setInterval(function(){
			if (sys_second > 1) {
				sys_second -= 1;
				
				second_elem.show().text(sys_second + 's');
				refreshBtn.removeClass('click').addClass('disabled');
			} else { 
				clearInterval(timer);
				refreshBtn.removeClass('disabled').addClass('click');
				second_elem.hide();
				$(document).delegate('.click', 'click', function(event) {
					start();
				});
			}
		  }, 1000);	
       }
 
    return{
        start : start
    };
 
})