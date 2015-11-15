define('date-stamp-model',
    (['core-model'],
    function() {
        var dateStampModel = function(context) {

            var defaults = {
                setDay:function(day){this.day = day},
                setMonth: function(month){this.month = month},
                setYear: function(year){this.year = year},
                getDay: function(){return this.day},
                getMonth: function(){return this.month},
                getYear: function(){return this.year}
            };

            if(typeof context == 'object'){
                for(value in context){
                    defaults[value] = context[value];
                }
            }
            return defaults;
        }

        return dateStampModel;
    })
)