var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var NotFoundRoute = Router.NotFoundRoute;
var RouteHandler = Router.RouteHandler;
var Link = Router.Link;

var App = React.createClass({
  render: function () {
    return (
      <div className="app">
        <header>
          <h1>BikeSched</h1>
          <Link to="home">Home</Link>
          <Link to="schedule">Schedule</Link>
          <Link to="submit">Propose a Session</Link>
          <Link to="favorites">My Schedule</Link>
        </header>
        <section className="content">
          <RouteHandler/>
        </section>
      </div>
    );
  }
});

var Home = React.createClass({
  render: function () {
    return <h2>Welcome to the Q2 All-Hands</h2>;
  }
});

var Schedule = React.createClass({
  render: function () {
    return <h2>Schedule</h2>;
  }
});

var Submit = React.createClass({
  render: function () {
    return <h2>Propose a Session</h2>;
  }
});

var Favorites = React.createClass({
  render: function () {
    return <h2>My Schedule</h2>;
  }
});

var NotFound = React.createClass({
  render: function () {
    return <h2>Oops</h2>;
  }
});


var routes = (
  <Route handler={App} path="/">
    <DefaultRoute name="home" handler={Home} />
    <Route name="schedule" handler={Schedule} />
    <Route name="submit" handler={Submit} />
    <Route name="favorites" handler={Favorites} />
    <NotFoundRoute handler={NotFound} />
  </Route>
);

module.exports = routes;
