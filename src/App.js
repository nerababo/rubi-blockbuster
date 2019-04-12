import React, { Component } from "react";
// import Movie from "./components/Movies/movie";
// import Show from "./components/Shows/Show";
import "./App.css";
// import { Nav } from "react-bootstrap";
import AppRouter from "./Routes/router";
import { HashRouter as Router } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <h2>List of Top 10 Movies and Shows</h2>

          <AppRouter />
        </div>
      </Router>
    );
  }
}

export default App;
