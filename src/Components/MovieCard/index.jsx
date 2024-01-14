import React from "react";

const MovieCard = ({ title, poster, summary, year, genre }) => {
  return (
    <div className="card">
      <img src={poster} alt={title} />
      <h3>{title}</h3>
      <p className="summary">{summary}</p>
      <p>{year.substring(0,4)}</p>
      <p>{genre}</p>
    </div>
  );
};

export default MovieCard;
