import React from "react";
import { Route, Switch } from "react-router-dom";
import Show from "../components/Shows/Show";
import Movie from "../components/Movies/movie";

function NoMatch() {
  return <h3>Error: Page Not Found</h3>;
}

function AppRouter() {
  return (
    <Switch>
      <Route exact path="/" component={Show} />
      <Route path="/Shows" component={Show} />
      <Route path="/Movies" component={Movie} />
      <Route component={NoMatch} />
    </Switch>
  );
}

export default AppRouter;
