import React from "react";
import logo from "../../logo.svg";
import Card from "react-bootstrap/Card";

const PLACEHOLDER_IMG = logo;

const DetailView = ({ detail }) => {
  const poster =
    detail.poster_path === "N/A"
      ? PLACEHOLDER_IMG
      : `https://image.tmdb.org/t/p/w300${detail.poster_path}`;

  return (
    // <div className="movie">
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={poster} alt={`Movie: ${detail.title}`} />
        <Card.Body>
          <Card.Title>{detail.title}</Card.Title>
          <Card.Text>{detail.overview}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};
export default DetailView;
