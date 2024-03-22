var formidable = require('formidable');
var http = require('http');

http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type':'text/html'});

    res.write('<form action="fileupload" method="post" enctype="multipart/formdata">');
    res.write('<input type="file" name="fileupload"><br>');
    res.write('<input type="submit">');
    res.end();
}).listen(8080);