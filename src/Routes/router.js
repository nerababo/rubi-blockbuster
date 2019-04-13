import React from "react";
import { Route, Switch } from "react-router-dom";
import Show from "../components/Shows/Show";
import Movie from "../components/Movies/movie";
import SearchD from "../components/SearchDva/SearchD";

function NoMatch() {
  return <h3>Error: Page Not Found</h3>;
}

function AppRouter() {
  return (
    <Switch>
      <Route exact path="/" component={Show} />
      <Route path="/Shows" component={Show} />
      <Route path="/Movies" component={Movie} />
      <Route path="/SearchD" component={SearchD} />
      <Route component={NoMatch} />
    </Switch>
  );
}

export default AppRouter;
