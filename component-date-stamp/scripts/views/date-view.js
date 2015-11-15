    // The templates are already registered, so we are ready to render!

define('date-view',(['date-model'], function(DateModel) {

    function DateView(options) {
        (function __constructor () {
            injectProperties(options);
        })();

        function injectProperties(options, object){
            var extendingObject = object || DateView;
            for(option in options){
                extendingObject[option] = options[option];
            }
        };

        function parseTemplate(template, context) {

            var resultHTML = '';

            dust.render(
                template,
                context,
                function(err, out) {
                    console.log(err + ' ' + out);
                    resultHTML = out;
                });
            return resultHTML;
        };

        return {
            init: function (options) {
                this.options = options || {};
            },

            model: new DateModel(),

            template: 'dateStampTemplate',

            element: null,

            render: function (element) {
                    var self = this,
                        selectedElement = element || this.element;

                    if(selectedElement)
                        selectedElement.innerHTML = parseTemplate(this.template, this.options);
                    // Render the view
            },

            extend: function(options) {
                var newInstance = clone(this);
                injectProperties(options, newInstance);
                return function(context){ injectProperties(context, newInstance); return newInstance};
            },

            getHTML:function() {
                var dateHTML = '';
                    dateHTML = parseTemplate(this.template, this.options);
                return dateHTML;
            }
        }
    };

    return DateView;
}))