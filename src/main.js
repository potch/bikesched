var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var NotFoundRoute = Router.NotFoundRoute;
var RouteHandler = Router.RouteHandler;

var App = React.createClass({
  render: function () {
    return (
      <div class="app">
        <header>
          <h1>lol</h1>
          <a href="/home">Home</a>
          <a href="/schedule">Schedule</a>
          <a href="/submit">Propose a Session</a>
          <a href="/favorites">My Schedule</a>
        </header>
        <RouteHandler/>
      </div>
    );
  }
});

var Home = React.createClass({
  render: function () {
    return <h1>lol</h1>;
  }
});

var Schedule = React.createClass({
  render: function () {
    return <div>Schedule</div>;
  }
});

var Submit = React.createClass({
  render: function () {
    return <div>Schedule</div>;
  }
});

var Favorites = React.createClass({
  render: function () {
    return <div>Schedule</div>;
  }
});

var NotFound = React.createClass({
  render: function () {
    return <div>Schedule</div>;
  }
});

var routes = (
  <Route handler={App} path="/">
  <DefaultRoute handler={Home} />
  <Route name="schedules" handler={Schedule} />
  <Route name="submit" handler={Submit} />
  <Route name="favorites" handler={Favorites} />
  <NotFoundRoute handler={NotFound} />
  </Route>
);

Router.run(routes, Router.HistoryLocation, function (Handler) {
  React.render(<Handler/>, document.body);
});
