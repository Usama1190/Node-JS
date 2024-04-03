// var http = require('http');

// http.createServer(function (req, res) {
//     res.writeHead(200, {'Content-Type':'text/html'});
//     res.end('Hello World!');
// }).listen(8080);




// built-in modules
var http = require('http');     // require() function with the name of module

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type':'text/html'});
    res.end('Hello World!');
}).listen(8080);