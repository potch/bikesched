var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var NotFoundRoute = Router.NotFoundRoute;
var RouteHandler = Router.RouteHandler;
var Link = Router.Link;

var App = React.createClass({displayName: "App",
  render: function () {
    return (
      React.createElement("div", {className: "app"}, 
        React.createElement("header", null, 
          React.createElement("h1", null, "BikeSched"), 
          React.createElement(Link, {to: "home"}, "Home"), 
          React.createElement(Link, {to: "schedule"}, "Schedule"), 
          React.createElement(Link, {to: "submit"}, "Propose a Session"), 
          React.createElement(Link, {to: "favorites"}, "My Schedule")
        ), 
        React.createElement("section", {className: "content"}, 
          React.createElement(RouteHandler, null)
        )
      )
    );
  }
});

var Home = React.createClass({displayName: "Home",
  render: function () {
    return React.createElement("h2", null, "Welcome to the Q2 All-Hands");
  }
});

var Schedule = React.createClass({displayName: "Schedule",
  render: function () {
    return React.createElement("h2", null, "Schedule");
  }
});

var Submit = React.createClass({displayName: "Submit",
  render: function () {
    return React.createElement("h2", null, "Propose a Session");
  }
});

var Favorites = React.createClass({displayName: "Favorites",
  render: function () {
    return React.createElement("h2", null, "My Schedule");
  }
});

var NotFound = React.createClass({displayName: "NotFound",
  render: function () {
    return React.createElement("h2", null, "Oops");
  }
});


var routes = (
  React.createElement(Route, {handler: App, path: "/"}, 
    React.createElement(DefaultRoute, {name: "home", handler: Home}), 
    React.createElement(Route, {name: "schedule", handler: Schedule}), 
    React.createElement(Route, {name: "submit", handler: Submit}), 
    React.createElement(Route, {name: "favorites", handler: Favorites}), 
    React.createElement(NotFoundRoute, {handler: NotFound})
  )
);

Router.run(routes, Router.HistoryLocation, function (Handler) {
  React.render(React.createElement(Handler, null), document.body);
});
