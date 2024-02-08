import React from "react";
import { AddToListButton } from "../";
import "./MovieCard.css";

export const MovieCard = ({
  id,
  title,
  poster,
  summary,
  year,
  genre,
  onClick,
}) => {
  return (
    <div role="card" className="card" onClick={onClick}>
      <img src={poster} alt={title} />
      <h3 className="title">{title}</h3>
      {/* <p className="summary">{summary}</p> */}
      <p className="year">{year}</p>
      <p className="card-genre">{genre}</p>
    </div>
  );
};

export default MovieCard;
