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
      <p className="year">{year.substring(0, 4)}</p>
      <p>{genre}</p>
      {/* <AddToListButton movieId={id} onSuccess={(message) => console.log(message)} /> */}
    </div>
  );
};

export default MovieCard;
