import React from 'react';

const MovieCard = ({ title, poster, summary, year, genre }) => {
  return (
    <div>
      <h3>{title}</h3>
      <img src={poster} alt={title} />
      <p>{summary}</p>
      <p>{year}</p>
      <p>{genre}</p>
    </div>
  );
};

export default MovieCard