import React from "react";
import Card from "react-bootstrap/Card";
import { Link, withRouter } from "react-router-dom";

const Suggestions = props => {
  const options = props.results.map(r => (
    <Link to={`{/DetailView/${r.id}}`}>
      <Card style={{ width: "18rem" }} key={`${r.id}`}>
        <Card.Img
          variant="top"
          src={`https://image.tmdb.org/t/p/w300/${r.poster_path}`}
          alt={`Movie: ${r.original_name}`}
        />
        <Card.Body>
          <Card.Title>{r.original_name}</Card.Title>
        </Card.Body>
      </Card>
    </Link>
  ));

  return (
    <div>
      <ul>
        <li>{options}</li>
      </ul>
    </div>
  );
};

export default withRouter(Suggestions);
