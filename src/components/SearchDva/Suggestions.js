import React from "react";
import Card from "react-bootstrap/Card";

const Suggestions = props => {
  const options = props.results.map(r => (
    // <li >
    <Card key={r.id} style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src={`https://image.tmdb.org/t/p/w300/${r.poster_path}`}
        alt={`Movie: ${r.original_name}`}
      />
      <Card.Body>
        <Card.Title>{r.original_name}</Card.Title>
      </Card.Body>
    </Card>
    // </li>
  ));
  return <div>{options}</div>;
};

export default Suggestions;
