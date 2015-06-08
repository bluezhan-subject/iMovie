/*global define*/
define([
	'underscore',
	'backbone',
	'text!module/templates/article.html',
	'common/common_function'
], function (_, Backbone, statsTemplate, common_function) {
	'use strict';

	var AppView = Backbone.View.extend({

		el: '#page-content',

		template: _.template(statsTemplate),

		events: {
             
		},

		initialize: function () {
               this.render();
		},

		render: function () {
           $(this.el).removeClass().addClass('page-article');
           $(this.el).html(this.template)
           common_function.page_show(this.el, "#loading");

           $(".menu li").on("click",function () {
			     window.location.hash = $(this).attr("data-url")
			});

           //
           var image_arr = ["http://7xj0rt.com1.z0.glb.clouddn.com/article/160202.66512499_1000X1000.jpg","http://7xj0rt.com1.z0.glb.clouddn.com/article/mmexport1431271701235.jpg","http://7xj0rt.com1.z0.glb.clouddn.com/article/mp12342531_1429938362712_1_th.jpeg","http://7xj0rt.com1.z0.glb.clouddn.com/article/70a98b5ag9a8c3858748d&690.jpg","http://7xj0rt.com1.z0.glb.clouddn.com/article/70a98b5ag9a8c3858748d&690.jpg","http://7xj0rt.com1.z0.glb.clouddn.com/article/1431272052798.jpg","","http://7xj0rt.com1.z0.glb.clouddn.com/article/4154545.jpg","http://7xj0rt.com1.z0.glb.clouddn.com/article/p215268550-1.jpg","http://7xj0rt.com1.z0.glb.clouddn.com/article/tiezhi.jpg","http://7xj0rt.com1.z0.glb.clouddn.com/article/hua.jpg",'http://7xj0rt.com1.z0.glb.clouddn.com/article/q.jpg','http://7xj0rt.com1.z0.glb.clouddn.com/article/2.png',"",'http://7xj0rt.com1.z0.glb.clouddn.com/article/circle-cross-2.png','http://7xj0rt.com1.z0.glb.clouddn.com/article/lifa.jpg'];

           // 加载图片
           common_function.load_image(image_arr,".article-list > div");

		}
	});

	return AppView;
});
