import React from "react";

const MovieCard = ({ title, poster, summary, year, genre }) => {
  return (
    <div role="card" className="card">
      <img src={poster} alt={title} />
      <h3>{title}</h3>
      <p className="summary">{summary}</p>
      <p>{year}</p>
      <p>{genre}</p>
    </div>
  );
};

export default MovieCard;
