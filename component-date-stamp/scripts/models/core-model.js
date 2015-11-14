/**
 * Created by kodsmith on 11/14/15.
 */
var CoreModel = function (attributes) {
console.log('start');

    var model = (function(options) {
        var context = options || {};
        var self = this;
        injectProperties(context);

        injectProperties({
            init: function(context) {
                self.context = context || {};
            },
            render: function() {
                var template = self.template || '',
                    data = self.context || {},
                    element = self.el || '';
                dust.render(template, data, function(err, out) { element = out;});
                // Render the view
            }
        });
    })();
    var __construct = (function(attributes) {
        //injectProperties(attributes);
        console.log('construct');
        return model(attributes);
    })(attributes);



    function injectProperties(options, object){
        var extendingObject = object || model;
        for(option in options){
            extendingObject[option] = options[option];
        }
    };

    function extend(options) {
        var newInstance = new model(options);
        injectProperties(options, newInstance);
        return newInstance;
    }

    return model;
}