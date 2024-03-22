// var http = require('http');
// var uc = require('upper-case');

// http.createServer(function(req, res) {
//     res.writeHead(200, {'Content-Type':'text/html'});

//     // Use our upper-case module to upper case a string
//     res.write(uc.upperCase('Hello World!'));
//     res.end();
// }).listen(8080);



// Events
// var fs = require('fs');

// var readStream = fs.createReadStream('./demofile.txt');

// // Write to the console when the file is open

// readStream.on('open', function() {
//     console.log('The file is open');
// });



var events = require('events');

var eventEmitter = new events.EventEmitter();

// Create an event handler:
var myEventHandler = function() {
    console.log('I hear a scream!');
}

// Assign the eventHandler to an event
eventEmitter.on('scream', myEventHandler);

// Fire the 'scream' event:
eventEmitter.emit('scream');