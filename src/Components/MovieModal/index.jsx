import React from "react";
import "./MovieModal.css";
import { motion } from "framer-motion";

export const MovieModal = ({ isOpen, onClose, movie }) => {
  if (!isOpen || !movie) {
    return null;
  }

  const releaseDate = new Date(movie.release_date);
  const year = releaseDate.getFullYear();

  return (
    <motion.div
      className="modal-backdrop"
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="modal-content">
        <button onClick={onClose}>✖️</button>
        <div className="modal-area">
          <img
            // src={movie.poster_path}
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.original_title}
            className="modal-img"
          />
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
