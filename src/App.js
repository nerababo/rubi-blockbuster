import React, { Component } from "react";

import "./App.css";
import { Nav } from "react-bootstrap";
import AppRouter from "./Routes/router";
import { BrowserRouter as Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import SearchD from "./components/SearchDva/SearchD";
import { LinkContainer } from "react-router-bootstrap";

const history = createBrowserHistory;

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div className="App">
          <h2>List of Top 10 Movies and Shows</h2>
          <Nav>
            <LinkContainer exact to="/">
              <Nav.Link> TV Shows </Nav.Link>
            </LinkContainer>
            <LinkContainer exact to="/Movies">
              <Nav.Link> Movies </Nav.Link>
            </LinkContainer>
          </Nav>
          <SearchD />
          <AppRouter />
        </div>
      </Router>
    );
  }
}

export default App;
