// var http = require('http');
// var fs = require('fs');

// http.createServer(function(req, res) {
//     // Open a file on the server and return its content
//     fs.readFile('demo_file1.html', function(err, data) {
//         res.writeHead(200, {'Content-Type':'text/html'});
//         res.write(data);
//         return res.end();
//     })
// }).listen(8080);



// Creating a new file
// const { log } = require('console');
// var fs = require('fs');

// Create a file named mynewfile1.txt
// fs.appendFile('mynewfile1.txt', 'Hello Content', function(err) {
//     if(err) throw err;
//     console.log('Saved!');
// });



// Creating a mynewfile2.txt
// var fs = require('fs');

// Create an empty file named mynewfile2.txt
// fs.open('mynewfile2.txt', 'w', function(err, file) {
//     if(err) throw err;
//     console.log('Saved!');
// });



// create a new file using writeFile
// var fs = require('fs');

// Create a file named mynewfile3.txt
// fs.writeFile('mynewfile3.txt', 'Hello Content', function(err) {
//     if(err) throw err;
//     console.log('Saved!');
// });



// Updating file
// var fs = require('fs');

// append content at the end of the file
// fs.appendFile('mynewfile1.txt', ' This is my text.', function(err) {
//     if(err) throw err;
//     console.log('Updated!');
// });



// writeFile
// var fs = require('fs');

// replace the file with a new one
// fs.writeFile('mynewfile3.txt', ' This is my text.', function(err) {
//     if(err) throw err;
//     console.log('Replaced!');
// });



// deleting file 
// var fs = require('fs');

// Delete the file mynewfile2.txt
// fs.unlink('mynewfile2.txt', function(err) {
//     if(err) throw err;
//     console.log('File Deleted!');
// });



// Rename file
// var fs = require('fs');

// // Rename the file 'mynewfile3.txt' to 'myrenamefile.txt':
// fs.rename('mynewfile3.txt', 'myrenamefile.txt', function(err) {
//     if(err) throw err;
//     console.log('File Renamed!');
// });



// url module
const { log } = require('console');
var url = require('url');
var adr = 'http://localhost:8080/default.htm?year=2017&month=february';

// Parse the address
var q = url.parse(adr, true);

// The parse method returns an object containingurl properties
console.log(q.host);
console.log(q.pathname);
console.log(q.search);

// the query properties returns an object with all the querystring parameters
// as properties

var qdata = q.query;
console.log(qdata.month);