import React from "react";

export const MovieCard = ({ title, poster, summary, year, genre, onClick }) => {
  return (
    <div role="card" className="card" onClick={onClick}>
      <img src={poster} alt={title} />
      <h3>{title}</h3>
      {/* <p className="summary">{summary}</p> */}
      <p>{year.substring(0, 4)}</p>
      <p>{genre}</p>
    </div>
  );
};

export default MovieCard;
