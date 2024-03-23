// var formidable = require('formidable');
// var http = require('http');
// var fs = require('fs');

// http.createServer(function(req, res) {
//     if(req.url == '/fileupload') {
//         var form = new formidable.IncomingForm();
//         form.parse(req, function(err, fields, files) {
            
//             var oldPath = files.filetoupload.filepath;
//             var newPath = 'G:\W3schools\Node JS\Node-JS/' + files.filetoupload.originalFilename;
//             fs.rename(oldPath, newPath, function(err) {
//                 if(err) throw err;
//             })

//             res.write('File uploaded and moved');
//             res.end();
//         });
//     }
//     else {
//         res.writeHead(200, {'Content-Type':'text/html'});

//         res.write('<form action="fileupload" method="post" enctype="multipart/formdata">');
//         res.write('<input type="file" name="fileupload"><br>');
//         res.write('<input type="submit">');
//         res.end();
//     }
// }).listen(8080);



var http = require('http');
var formidable = require('formidable');
var fs = require('fs');

http.createServer(function (req, res) {
  if (req.url == '/fileupload') {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
      var oldpath = files.filetoupload.filepath;
      var newpath = 'G:\W3schools\Node JS\Node-JS' + files.filetoupload.originalFilename;
      fs.rename(oldpath, newpath, function (err) {
        if (err) throw err;
        res.write('File uploaded and moved!');
        res.end();
      });
 });
  } else {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    return res.end();
  }
}).listen(8080);