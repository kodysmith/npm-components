var http = require('http'),
    fs = require('fs');


//TODO read in the file into a string
exports.compileDust = function() {
    var fs = require('fs');
    fs.writeFile("/date-stamp.js", "Hey there!", function(err) {
        if(err) {
            return console.log(err);
        }

        console.log("The file was saved!");
    });
}
//TODO parse the string into an array
exports.test = function() {

}
//TODO pass each value in the array into an API request
exports.parse = function() {

}
//TODO make call to API 2 to save data
exports.read = function() {

}