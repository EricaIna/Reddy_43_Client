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

export const MovieCard = ({ title, poster, summary, year, genre, onClick }) => {
  return (
<<<<<<< HEAD
    <div className="card">
=======
    <div role="card" className="card" onClick={onClick}>
>>>>>>> 40f4813efdfc8792b598f7320a51e35d0b99052f
      <img src={poster} alt={title} />
      <h3>{title}</h3>
      {/* <p className="summary">{summary}</p> */}
      <p>{year.substring(0, 4)}</p>
      <p>{genre}</p>
    </div>
  );
};

export default MovieCard;
