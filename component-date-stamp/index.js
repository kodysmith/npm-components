console.log('setting up requirements');
requirejs = require('requirejs');
var define = require('define');

console.log('lodaing date-stamp')
exports.dateStamp = require('./scripts/date-stamp.js');

console.log('loded date-stamp');

exports.render = function(){

};