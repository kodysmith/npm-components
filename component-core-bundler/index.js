var http = require('http'),
    fs = require('fs');

    exports.card = require('./scripts/js/card.js');

fs.readFile('package.json',function(err,html){
	http.createServer(function(request, response) { 
		response.writeHeader(200, {"Content-Type": "text/json"});
		//response.write(html);
		response.end();
	}).listen(8000);
})
//     // fs.readFile('./views/_card.html', function (err, html) {
//     // if (err) {
//     //     throw err; 
//     // }       
//     http.createServer(function(request, response) {  
//         response.writeHeader(200, {"Content-Type": "text/html"});  
//         response.write(html);  
//         response.end();  
//     }).listen(8000);
// });