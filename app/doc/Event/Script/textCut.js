/**
 * 文字截取功能
 * <p class="text-cut60">
    手表 钟表手表 钟表手表 钟表手表 钟表手表 钟表手表 钟表手表 钟表手表 手表 钟表手表 钟表手表 钟表手表 钟表手表 钟表手表 钟表手表 钟表手表 钟表手表 钟表手表 钟表钟表手表 钟表手表 钟表
	</p>
 * 调用方式：添加class，text-cut60（60代表要截取的字体数），textCut.textCut();
 */
/*require.config({
    baseUrl: "../../../Event/Script/",
    paths: {
      "jquery": "libs/jquery203"
    },
});
*/
define(['jquery'],function($){

        function cut(){
	        $("[class^='text-cut']").each(function() {
		        var self = $(this),
		        	cutlength = parseInt(self.attr('class').replace("text-cut", "")),
		        	text = self.html().trim();

		        self.attr("title", text);
		        text = (text.length > cutlength + 2) ? (text.substring(0, cutlength) + "...") : text;
		        self.html(text);
			})
		}

		function textCut(){
			cut();
			$( document ).on( "click", ".toggle", function() {
				var toggle = $(".toggle"),
					tc = $("[class^='text-cut']");

				if(toggle.html() == '更多'){
					var title = toggle.prev(tc).attr("title");
		        	toggle.prev(tc).html(title);
		        	toggle.addClass('up').html("收起");
				} else if(toggle.html() == '收起'){
					cut();
	        		toggle.removeClass('up').html("更多");
				}
	    	})
		}
  

    return{
        textCut : textCut
    };

})

