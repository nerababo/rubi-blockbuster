import React from "react";
import logo from "../../logo.svg";

const PLACEHOLDER_IMG = logo;

const Shows = ({ show }) => {
  const poster =
    show.poster_path === "N/A"
      ? PLACEHOLDER_IMG
      : `https://image.tmdb.org/t/p/w300${show.poster_path}`;

  return (
    <div className="show">
      <h2>{show.name}</h2>
      <div>
        <img width="200" alt={`Show: ${show.name}`} src={poster} />
      </div>
      <p>{show.overview}</p>
    </div>
  );
};
export default Shows;
