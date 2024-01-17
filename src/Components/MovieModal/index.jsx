// import React from "react";
// import "./MovieModal.css";
// import { motion } from "framer-motion";
// import { AddToListButton } from "..";

// export const MovieModal = ({ isOpen, onClose, movie, id }) => {
//   if (!isOpen || !movie) {
//     return null;
//   }

//   const releaseDate = new Date(movie.release_date);
//   const year = releaseDate.getFullYear();

//   return (
//     <motion.div
//       className="modal-backdrop"
//       onClick={onClose}
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//     >
//       <div className="modal-content">
//         <button onClick={onClose} className="modal-close">
//           ✖️
//         </button>
//         <div className="modal-area">
//           <img
//             // src={movie.poster_path}
//             src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
//             alt={movie.original_title}
//             className="modal-img"
//           />
//           <AddToListButton
//             movieId={id}
//             onSuccess={(message) => console.log(message)}
//           />

//           <h2 className="modal-title">
//             {movie.original_title}
//             <span className="modal-year">({year})</span>
//           </h2>
//           {/* <p>{movie.release_date}</p> */}

//           <p className="modal-rate">Rate : {movie.vote_average.toFixed(1)}</p>
//           <p className="modal-description">{movie.overview}</p>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default MovieModal;

import React, { useState, useEffect } from "react";
import "./MovieModal.css";
import { motion } from "framer-motion";
import { AddToListButton } from "..";

export const MovieModal = ({ isOpen, onClose, movie, id }) => {
  const [userMovies, setUserMovies] = useState([]);

  useEffect(() => {
    // Only fetch user movies if the modal is open and movie is available
    if (isOpen && movie) {
      const fetchUserMovies = async () => {
        try {
          const token = localStorage.getItem("accessToken");
          console.log(token);
          const response = await fetch("http://localhost:4000/user-film-list", {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          if (!response.ok) {
            throw new Error("Could not fetch user movies");
          }

          const data = await response.json();
          setUserMovies(data);
        } catch (error) {
          console.error("Error fetching user's movie list:", error);
        }
      };

      fetchUserMovies();
    }
  }, [isOpen, movie]); // Add dependencies here

  // Conditional rendering moved inside return
  if (!isOpen || !movie) {
    return null;
  }
  const releaseDate = new Date(movie.release_date);
  const year = releaseDate.getFullYear();
  const isMovieInList = userMovies.some(
    (userMovie) => userMovie.id === movie.id
  )
    ? "Yes"
    : "No";

  console.log("USER MOVIES NOW", userMovies);
  console.log("MODEL MOVIES NOW", movie);
  return (
    <motion.div
      className="modal-backdrop"
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="modal-content">
        <button onClick={onClose} className="modal-close">
          ✖️
        </button>
        <div className="modal-area">
          <img
            // src={movie.poster_path}
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.original_title}
            className="modal-img"
          />
          {isMovieInList === "No" ? (
            <AddToListButton
              saved={isMovieInList}
              movieId={id}
              onSuccess={(message) => console.log("THIS MESS", message)}
            />
          ) : (
            <p>Movie on your list ✔</p>
          )}

          <h2 className="modal-title">
            {movie.original_title}
            <span className="modal-year">({year})</span>
          </h2>
          {/* <p>{movie.release_date}</p> */}

          <p className="modal-rate">Rate : {movie.vote_average.toFixed(1)}</p>
          <p className="modal-description">{movie.overview}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default MovieModal;
