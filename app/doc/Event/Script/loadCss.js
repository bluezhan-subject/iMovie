/**
 * 秒杀功能
 * 调用: loadCss.load("../css.css");
*/
define(function (){
    function load(url) {
	    var link = document.createElement("link");
	    link.type = "text/css";
	    link.rel = "stylesheet";
	    link.href = url;
	    document.getElementsByTagName("head")[0].appendChild(link);
	}
 
    return{
        load : load
    };
 
})