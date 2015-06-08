/**
 * 返回顶部功能
 * 1.加载图标 2.实现返回功能
 * 调用方式：toTopinit.backtoTop();
 */
define(['jquery'],function($){

    function backtoTop(){

        $backToTopEle = $('<div class="toTop" style="position:fixed; bottom:10px; right:5px; z-index:999; width:42px; height:43px;"><img src="../../../Images/common/toTop.png" width=42px height=43px></div>').appendTo($("body")).click(function() {
            $("html, body").animate({ scrollTop: 0 }, 200);
        });

        $backToTopFun = function() {
            var st = $(document).scrollTop(), winh = $(window).height();
            (st > 0)? $backToTopEle.show(): $backToTopEle.hide();
        };

        $(window).bind("scroll", $backToTopFun);
        $(function() { $backToTopFun(); });
    }

    return{
        backtoTop : backtoTop
    };

})

