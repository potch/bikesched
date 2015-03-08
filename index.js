var express = require('express');
var app = express();
var http = require('http');

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/static'));

var server = http.createServer(app);

app.get('/', function(req, res) {
  res.redirect('/index.html');
});

server.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});
