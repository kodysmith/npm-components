    // The templates are already registered, so we are ready to render!

define('date-view',([], function() {
    var DateView = function (attributes) {


        var exposure = {
            init:init,
            render:render,
            extend:extend
            },
            attributes = attributes || {};

        var __construct = function(attributes) {
            injectProperties(attributes);
        }(attributes);

        function context() {
            return attributes;
        };

        function init(options) {
            attributes = options || {};
        };

        function render() {
            dust.render('dateStampTemplate', context(), function(err, out) { console.log(err + ' ' + out); document.body.innerHTML += out;});
            // Render the view

        };

        function injectProperties(options, object){
            var extendingObject = object || self;
            for(option in options){
                extendingObject[option] = options[option];
            }
        };

        function extend(options) {
            var newInstance = new DateView;
                injectProperties(options, newInstance);
            return newInstance;
        }

        return exposure;
    }

    return DateView;
}))