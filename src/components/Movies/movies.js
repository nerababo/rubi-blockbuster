import React from "react";
import logo from "../../logo.svg";
import Card from "react-bootstrap/Card";

const PLACEHOLDER_IMG = logo;

const Movies = ({ movie }) => {
  const poster =
    movie.poster_path === "N/A"
      ? PLACEHOLDER_IMG
      : `https://image.tmdb.org/t/p/w300${movie.poster_path}`;

  return (
    // <div className="movie">
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={poster} alt={`Movie: ${movie.title}`} />
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
};
export default Movies;
