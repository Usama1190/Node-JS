// var http = require('http');

// http.createServer(function(req, res) {
//     res.writeHead(200, {'Content-Type':'text/html'});
//     res.end('Hello World!');
// }).listen(8080);



// var http = require('http');
// var dt = require('./myfirstmodule');

// http.createServer(function (req, res) {
//     res.writeHead(200, {'Content-Type':'text/html'});
//     res.write('The date and time is currently: ' + dt.myDateTime());
//     res.end();
// }).listen(8080);



var http = require('http');

// Create a server object
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type':'text/html'});
    res.write('Hello World!');    // Wrtie a response to the client
    res.end();                    // end the response 
}).listen(8080);                  // the server object listens on port 8080