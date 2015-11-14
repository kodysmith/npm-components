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


define(
    'date-stamp',
    ['date-stamp-model',
    'dust',
    'date-view'
    ],
    function(DateModel, dust, DateView) {
        'use strict';
        console.log('date fing stamp');
        var dateStamp = {
            __construct: function(){

            },
            view: DateView(),
            model: DateModel,
            render: function(){
                this.view.init(this.DateModel());
                this.view.render();
            }

        };

        return dateStamp;
    }
);
