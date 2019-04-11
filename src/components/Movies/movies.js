import React from "react";
import logo from "../../logo.svg";

const PLACEHOLDER_IMG = logo;

const Movies = ({ movie }) => {
  const poster =
    movie.poster_path === "N/A"
      ? PLACEHOLDER_IMG
      : `https://image.tmdb.org/t/p/w300${movie.poster_path}`;

  return (
    <div className="movie">
      <h2>{movie.title}</h2>
      <div>
        <img width="200" alt={`Movie: ${movie.title}`} src={poster} />
      </div>
      <p>{movie.overview}</p>
    </div>
  );
};
export default Movies;
