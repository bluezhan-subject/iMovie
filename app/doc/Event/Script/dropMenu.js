/**
 * 动态导航
 * html: <div id="drop-menu"><a href="javascript:void(0)" class="search-btn" id="btn-menu"><span> </span></a></div>	
 * 调用: require(['dropMenu'],function (dropMenu){
        	dropMenu.menuInit();
		});
*/
define(['jquery','loadCss'],function ($,loadCss){

        loadCss.load('../../../Event/css/dynamic-menu.css');
		
		function menuInit(){
			var menuTpl ='<ul id="menu-container" class="menu-container" style="display:none;">'
							+'<li class="home"><p>首页</p></li>'
							+'<li class="search"><p >搜索</p></li>'
							+'<li class="sns"><p>微社区</p></li>'
							+'<li class="my"><p>我</p></li>'
						  +'</ul>';

		   $(menuTpl).insertAfter($('#btn-menu'));
		   
		   //以下调用global.js的公共方法
		   $('.home').click(function(){
			   goHome();
		   });
		   
		   $('.search').click(function(){
			   goSearch();
		   });
		   
		   $('.sns').click(function(){
			   goSns();
		   });
		   
		   $('.my').click(function(){
			   goMy();
		   });
		   

	       $('html').on('click',function() {
			   $('#menu-container').fadeOut('fast'); 
		   });

		   $('#drop-menu').on('click',function(event){
			     event.stopPropagation();
		   });

		   $('#btn-menu').on('click',function(event){
		   	   $('#menu-container').toggle();
		   });

		}

		return {
        	menuInit : menuInit
    	}

});
