var router = require('react-router');

var routes = (
  <Route handler={App} path="/">
    <DefaultRoute handler={Home} />
    <Route name="schedules" handler={Schedule} />
    <Route name="submit" handler={Submit} />
    <Route name="favorites" handler={Favorites} />
    <NotFoundRoute handler={NotFound} />
    <Redirect from="company" to="about" />
  </Route>
);

Router.run(routes, Router.HistoryLocation, function (Handler) {
  React.render(<Handler/>, document.querySelector('#app'));
});
