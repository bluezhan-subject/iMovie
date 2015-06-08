/*global define*/
define([
	'underscore',
	'backbone',
	'text!module/templates/subject.html',
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
           $(this.el).removeClass().addClass('page-subject');
           $(this.el).html(this.template);
           common_function.page_show(this.el, "#loading");
           $(".menu li").on("click",function () {
			     window.location.hash = $(this).attr("data-url")
			});

		}
	});

	return AppView;
});
