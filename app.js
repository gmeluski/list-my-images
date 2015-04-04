var express = require('express');
var app = express();
var fs = require('fs');

app.use(express.static(__dirname + '/public'));
app.get('/', function (req, res) {
  var files =  fs.readdirSync(__dirname + '/public/images/');
  var imageString = '';
  var imageElement;

  for (var i = 0; i < files.length; i++) {
    imageElement = '<img src="./images/' + files[i] + '" /><br />';
    imageString += imageElement;
    console.log(files[i]);
  }
  res.send(imageString);

});

var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});
