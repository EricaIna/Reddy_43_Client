// import React from "react";

// const MovieCard = ({ title, poster, summary, year, genre }) => {
//   return (
//     <div role="card" className="card">
//       <img src={poster} alt={title} />
//       <h3>{title}</h3>
//       <p className="summary">{summary}</p>
//       <p>{year.substring(0,4)}</p>
//       <p>{genre}</p>
//     </div>
//   );
// };

// export default MovieCard;

import React from "react";
import { AddToListButton } from "../";
export const MovieCard = ({ id, title, poster, summary, year, genre, onClick, }) => {
  return (
    <div role="card" className="card" onClick={onClick}>
      <img src={poster} alt={title} />
      <h3>{title}</h3>
      {/* <p className="summary">{summary}</p> */}
      <p>{year.substring(0, 4)}</p>
      <p>{genre}</p>
      <AddToListButton movieId={id} onSuccess={(message) => console.log(message)} />
    </div>
  );
};

export default MovieCard;
