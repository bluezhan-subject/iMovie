/**
 * scroll初始化
 * 调用：iscrollInit.init();
 */
define(['iScroll'],function (iScroll){
        var myScroll;
        function loaded() {
       
          myScroll = new iScroll('wrapper',{/*bounce:false, */hScrollbar:false, vScrollbar:false});
          

        }

        document.addEventListener('DOMContentLoaded', setTimeout(function () { loaded(); }, 200), false);

        function refresh(){
          myScroll.refresh(); 
        }

       return{
       	 init : loaded,
         refresh : refresh
       }
});