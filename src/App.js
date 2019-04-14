import React, { Component } from "react";
// import Movie from "./components/Movies/movie";
// import Show from "./components/Shows/Show";
import "./App.css";
// import { Nav } from "react-bootstrap";
import AppRouter from "./Routes/router";
import { BrowserRouter as Router, withRouter } from "react-router-dom";
import SearchD from "./components/SearchDva/SearchD";
import { LinkContainer } from "react-router-bootstrap";

// const SearchWithRouter = withRouter(SearchD);

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <h2>List of Top 10 Movies and Shows</h2>
          <SearchD />
          <AppRouter />
        </div>
      </Router>
    );
  }
}

export default App;
