exports.printMsg = function() {
	console.log("This message is from the package");
}

var grunt = require('grunt');

grunt.registerTask('default', 'Log some stuff.', function() {
    console.log('stuff');
});

exports.build = function() {
	grunt.tasks(['default']);
}

