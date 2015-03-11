var express = require('express');
var app = express();
var http = require('http');
var routes = require('./lib/routes');
var template = require('fs').readFileSync('static/index.html').toString();
var React = require('react');
var Router = require('react-router');

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/static'));

var server = http.createServer(app);

app.get('/', function(req, res) {
  res.redirect('/index.html');
});

app.use(function (req, res) {
  // pass in `req.url` and the router will immediately match
  Router.run(routes, req.url, function (Handler) {
    var content = React.renderToString(React.createElement(Handler, null));
    var body = template.replace('<REPLACEME/>', content);
    res.send(body);
  });
});

server.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});
