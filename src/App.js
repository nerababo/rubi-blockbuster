import React, { Component } from "react";
import Movie from "./components/Movies/movie";
import Show from "./components/Shows/Show";
import "./App.css";
import { Nav } from "react-bootstrap";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav>
          <Nav.Item>
            <Nav.Link href="/link-1">Movies</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">Tv Shows</Nav.Link>
          </Nav.Item>
        </Nav>

        <h2>List of Top 10 Movies and Shows</h2>
        <form>
          <input placeholder="search" />
        </form>
        <Movie className="movies" />
        <Show className="movies" />
      </div>
    );
  }
}

export default App;
