console.log('setting up requirements');

var define = require('define');

console.log('lodaing date-stamp')
exports.dateStamp = require('./scripts/date-stamp.js');

console.log('loded date-stamp');

console.log(exports.dateStamp);
console.log('rendering');
exports.render = function(){

};