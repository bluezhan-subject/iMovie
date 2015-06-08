/*global define*/
define([
	'jquery',
	'backbone',
	'module/views/index',
	'module/views/image',
	'module/views/article',
	'module/views/subject',
	'module/views/book',
], function ($, Backbone, indexView, imageView, articleView, subjectView, bookView) {
	'use strict';

	var Router = Backbone.Router.extend({
		routes: {
			""     : "index",
			"*page" : "filterRoute" // 页面
		},
		index: function () {
			window.location.hash = "#index"
		},
		filterRoute: function (page) {

            var page_arr = ["index","image","article","subject","book"]
			if ($.inArray(page,page_arr) == -1) {
				window.location.hash = "#index"
			};
			if ( page =="index"  ) {
				new indexView();
			};
			if ( page =="image"  ) {
				new imageView();
			};
			if ( page =="article"  ) {
				new articleView();
			};
			if ( page =="subject"  ) {
				new subjectView();
			};
			if ( page =="book"  ) {
				new bookView();
			};
		}
	});

	return Router;
});
