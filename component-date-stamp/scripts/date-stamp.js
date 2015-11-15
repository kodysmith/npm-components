/**
 * Created by kodsmith on 11/12/15.
 */

//
//var dateStamp = function(options){
//
//    var template =
//
//    return {
//        render:render,
//        dispose:dispose,
//        update:update
//    }
//}
//
requirejs.config({

    paths: {
        baseDir: '../scripts/',
        dust: ['../node_modules/dustjs-linkedin/lib/dust'],
        dateStampView: ['../scripts/views/date-view'],
        dateStamp: ['../scripts/date-stamp'],
        dateStampModel: ['../scripts/models/date-model'],
        templateBundle: ['../compiled/template-bundle'],
        demoData: ['../scripts/mock/demo']
    }
});

require([
    'dust',
    'dateStampView',
    'dateStampModel',
    'dateStamp'], function() {

    define(
        'date-stamp',
        ['date-stamp-model',
            'dust',
            'date-view'
        ],
        function(DateModel, dust, DateView) {
            'use strict';
            console.log('date fing stamp');
            var dateStamp = function(context) {
                var dateStampInstance = this;

                (function __construct(context) {
                    dateStampInstance.view = new DateView(context);
                    dateStampInstance.model = new DateModel(context);
                })(context);


                this.render = function() {
                    dateStampInstance.view.init(this.model);
                    dateStampInstance.view.render();
                }

            };

            return dateStamp;
        }
    );
});