import React from "react";
import Card from "react-bootstrap/Card";
import { Link, withRouter } from "react-router-dom";
import DetailView from "../DetailView/DetailView";
const Suggestions = props => {
  const options = props.results.map(r => (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src={`https://image.tmdb.org/t/p/w300/${r.poster_path}`}
        alt={`Movie: ${r.original_name}`}
      />
      <Card.Body>
        <Card.Title>{r.original_name}</Card.Title>
      </Card.Body>
    </Card>
  ));

  return (
    <div>
      <ul>{options}</ul>
    </div>
  );
};

export default withRouter(Suggestions);
