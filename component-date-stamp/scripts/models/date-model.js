/**
 * Created by kodsmith on 11/12/15.
 */

function date (options){
    var self = this;

    self.locale = 'en-us';
    self.style = 'standard';
    self.date = {
        day: 'TBD',
        month: ''
    };

    options = options || false;

    if(options){
        self.locale = options.locale || self.locale;
        self.style = options.style || self.style;
        self.date = options.date || self.date;
    }

    return self;
}