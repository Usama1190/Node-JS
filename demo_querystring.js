var http = require('http');
var url = require('url');

http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type':'text/html'});

    // use the url module to turn the querystring into the object
    var q = url.parse(req.url, true).query;

    // return the year and month from the query object
    var txt = q.year + " " + q.month;
    res.end(txt);
}).listen(8080);