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

// API

/* GET /events
 *
 * retrieve a list of event resources
 */
app.get('/events', function(req, res) {

});

/* GET /events/{id}
 *
 * retrieve a single event resources
 */
app.get('/events/:id', function(req, res) {

});

/* GET /users/
 *
 * retrieve a list of users
 */
app.get('/users/', function(req, res) {

});

/* GET /users/{id}
 *
 * retrieve a single user resources
 */
app.get('/users/:id', function(req, res) {

});

/* GET /tickets/
 *
 * retrieve a list of tickets
 */
app.get('/tickets/', function(req, res) {

});

/* GET /tickets/{id}
 *
 * retrieve a single ticket resources
 */
app.get('/tickets/:id', function(req, res) {

});

/* GET /locations/
 *
 * retrieve a list of locations
 */
app.get('/tickets/:id', function(req, res) {

});

/* GET /locations/{id}
 *
 * retrieve a single location resources
 */
app.get('/tickets/:id', function(req, res) {

});


// views and front end

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
