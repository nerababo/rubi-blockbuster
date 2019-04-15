import React, { Component } from "react";
import axios from "axios";
import Suggestions from "./Suggestions";
import Form from "react-bootstrap/Form";

const API_KEY = "482d929cb4907d666170f441baa7bd20";
const API_URL = "https://api.themoviedb.org/3/search/multi?";

class SearchD extends Component {
  state = {
    query: "",
    results: []
  };
  initialState = { ...this.state };

  getInfo = () => {
    axios
      .get(
        `${API_URL}api_key=${API_KEY}&language=en-US&query=${
          this.state.query
        }&page=1&include_adult=false&region=en-US&append_to_response=videos`
      )
      .then(({ data }) => {
        this.setState({
          results: data.results
        });
      });
  };

  handleInputChange = () => {
    this.setState(
      {
        query: this.search.value
      },
      () => {
        if (this.state.query && this.state.query.length >= 3) {
          if (this.state.query.length % 1 === 0) {
            setTimeout(() => {
              this.getInfo();
            }, 1000);
          }
        } else {
          this.setState(this.initialState);
        }
      }
    );
  };

  render() {
    return (
      <Form>
        <input
          placeholder="search"
          ref={input => (this.search = input)}
          onChange={this.handleInputChange}
        />
        <Suggestions results={this.state.results} />
      </Form>
    );
  }
}

export default SearchD;
