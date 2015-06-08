'use strict';

require.config({
    // baseUrl: "js/",
    paths: {
        jquery: './lib/jquery',
        underscore: './lib/underscore',
        backbone: './lib/backbone',
        backboneLocalstorage: './lib/backbone.localStorage',
        text: './lib/text'
    },
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: [
                'underscore',
                'jquery'
            ],
            exports: 'Backbone'
        },
        backboneLocalstorage: {
            deps: ['backbone'],
            exports: 'Store'
        }
    }
});

require([
    'backbone',
    'module/routers/router',
    'common/common_function'
], function(Backbone, Workspace, common_function) {

    new Workspace();
    Backbone.history.start();
    // new AppView();

});
