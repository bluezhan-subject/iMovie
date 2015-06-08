/**
 * 推送广告框
 * 调用：pushBox.init();
 */
define(['jquery','loadCss'],function ($,loadCss){

		loadCss.load('../../../Event/css/push-box.css');

		function init(){
	        var tpl = '<div id="push-box" class="push-box">'
				     +'  <section>'
				     +'     <h4 class="push-head"><img src="../../../Images/common/push-head-icon.png"></h4>'
				     +'     <div class="push-content">'
				     +'       <div class="content">'
				     +'           <p><img src="../../../Images/common/532.jpg"></p>'
				     +'           <p class="c000">pizzahut 10元兑换券</p>'
				     +'           <p class="f13 cFF3401">会员使用 | 免费</p>'
				     +'           <p class="f13">2014-2-14至2014-5-1</p>'
				     +'       </div>'
				     +'     </div>'
				     +'     <b class="btn btn-primary push-more">点击查看</b>'
				     +'     <b class="push-close"><img src="../../../Images/common/close-icon.png"></b>'
				     +'   </section>'
				     +'</div>';

			$(tpl).insertAfter('body');

			$(".push-close").on('click', function() {
				$("#push-box").hide();
			});
		}

       return{
       	 init : init
       }
});