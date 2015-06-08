/*global define*/
define([
	'jquery',
	'underscore',
	'backbone',
	'text!module/templates/index.html',
	'common/common_function'
], function ($, _, Backbone, statsTemplate, common_function) {
	'use strict';

	var AppView = Backbone.View.extend({

		el: '#page-content',

		template: _.template(statsTemplate),

		events: {
			"click .menu-li" : function (event) {
				window.location.hash = $(event.currentTarget).attr("data-url")
				// console.log(event)

			} 
		},

		initialize: function () {
			var that = this ;
			  $(this.el).removeClass().addClass('page-index');
              this.render();


		},

		render: function () {
          
           $(this.el).html(this.template)

           common_function.page_show(this.el, "#loading");

		}

	});

	return AppView;
});
