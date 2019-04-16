import React from "react";
import { Route, Switch } from "react-router-dom";
import Show from "../components/Shows/Show";
import Movie from "../components/Movies/movie";
import DetailView from "../components/DetailView/DetailView";

function NoMatch() {
  return <h3>Error: Page Not Found</h3>;
}

function AppRouter() {
  return (
    <Switch>
      <Route exact path="/" component={Show} />
      <Route path="/Home" component={Show} />
      <Route path="/Movies" component={Movie} />

      <Route path="/DetailView/:id" component={DetailView} />
      <Route path="/DetailView/" component={DetailView} />
      <Route component={NoMatch} />
    </Switch>
  );
}

export default AppRouter;
