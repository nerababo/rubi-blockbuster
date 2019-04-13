import React from "react";
import Card from "react-bootstrap/Card";

const Suggestions = props => {
  const options = props.results.map(r => (
    <li key={r.id}>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={`https://image.tmdb.org/t/p/w300/${r.poster_path}`}
          alt={`Movie: ${r.title}`}
        />
        <Card.Body>
          <Card.Title>{r.title}</Card.Title>
        </Card.Body>
      </Card>
    </li>
  ));
  return <ul>{options}</ul>;
};

export default Suggestions;
