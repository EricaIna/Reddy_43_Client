import React from "react";
import "./MovieCard.css";

export const MovieCard = ({ title, poster, summary, year, genre, onClick }) => {
  return (
    <div role="card" className="card" onClick={onClick}>
      <img src={poster} alt={title} />
      <h3 className="title">{title}</h3>
      {/* <p className="summary">{summary}</p> */}
      <p className="year">{year.substring(0, 4)}</p>
      <p>{genre}</p>
      <button onClick={() => onAddToList(id)}>Add to List</button>
    </div>
  );
};

export default MovieCard;
