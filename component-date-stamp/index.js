var http = require('http'),
    fs = require('fs'),
    duster = require('dusterjs');



//TODO read in the file into a string
exports.compileDust = function() {
    console.log('compiling dust');
    duster('templates/','templates/compiled.js');
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