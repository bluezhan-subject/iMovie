/*global define*/
define([
	'underscore',
	'backbone',
	'text!module/templates/image.html',
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
          $(this.el).removeClass().addClass('page-image');
           $(this.el).html(this.template);
           common_function.page_show(this.el, "#loading");
           $(".menu li").on("click",function () {
			     window.location.hash = $(this).attr("data-url")
			});

           var image_arr = ["http://7xj0rt.com1.z0.glb.clouddn.com/img02.jpg","http://7xj0rt.com1.z0.glb.clouddn.com/img01.jpg","http://7xj0rt.com1.z0.glb.clouddn.com/img04.jpg","http://7xj0rt.com1.z0.glb.clouddn.com/img/P41120-164041.jpg","http://7xj0rt.com1.z0.glb.clouddn.com/img/P41029-124339.jpg","http://7xj0rt.com1.z0.glb.clouddn.com/img/P50102-101221.jpg","http://7xj0rt.com1.z0.glb.clouddn.com/img/P41130-140121.jpg"];

           // 加载图片
           common_function.load_image(image_arr,".image-list .image-list-box");

		}
	});

	return AppView;
});
