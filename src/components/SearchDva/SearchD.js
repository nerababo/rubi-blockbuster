import React, { Component } from "react";
import axios from "axios";
import Suggestions from "./Suggestions";

const API_KEY = "482d929cb4907d666170f441baa7bd20";
const API_URL = "https://api.themoviedb.org/3/search/multi?";

class SearchD extends Component {
  state = {
    query: "",
    results: []
  };

  getInfo = () => {
    axios
      .get(
        `${API_URL}api_key=${API_KEY}&language=en-US&query=${
          this.state.query
        }&page=1&include_adult=false&region=en-US`
      )
      .then(({ data }) => {
        this.setState({
          results: data.results // MusicGraph returns an object named data,
          // as does axios. So... data.data
        });
      });
  };

  handleInputChange = () => {
    this.setState(
      {
        query: this.search.value
      },
      () => {
        if (this.state.query && this.state.query.length > 2) {
          if (this.state.query.length % 1 === 0) {
            this.getInfo();
          }
        }
      }
    );
  };

  render() {
    return (
      <form>
        <input
          placeholder="Search for..."
          ref={input => (this.search = input)}
          onChange={this.handleInputChange}
        />
        <Suggestions results={this.state.results} />
      </form>
    );
  }
}

export default SearchD;
