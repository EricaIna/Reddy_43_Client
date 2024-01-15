import React from "react";

const MovieCard = ({id, title, poster, summary, year, genre, onAddToList}) => {
  return (
    <div role="card" className="card">
      <img src={poster} alt={title} />
      <h3>{title}</h3>
      <p className="summary">{summary}</p>
      <p>{year.substring(0,4)}</p>
      <p>{genre}</p>
      <button onClick={() => onAddToList(id)}>Add to List</button>
    </div>
  );
};

export default MovieCard;
