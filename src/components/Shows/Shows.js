import React from "react";
import logo from "../../logo.svg";
import Card from "react-bootstrap/Card";
import "../cards.css";

const PLACEHOLDER_IMG = logo;

const Shows = ({ show }) => {
  const poster =
    show.poster_path === "N/A"
      ? PLACEHOLDER_IMG
      : `https://image.tmdb.org/t/p/w300${show.poster_path}`;

  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={poster} alt={`Show: ${show.name}`} />
        <Card.Body>
          <Card.Title>{show.name}</Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
};
export default Shows;
