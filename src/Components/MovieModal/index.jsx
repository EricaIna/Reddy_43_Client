import React from "react";
import "./MovieModal.css";

export const MovieModal = ({ isOpen, onClose, movie }) => {
  if (!isOpen || !movie) {
    return null;
  }

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content">
        <button onClick={onClose}>Close</button>
        <div className="description">
          <img
            src={movie.poster_path}
            alt={movie.original_title}
            className="modal-img"
          />
          <h2 className="modal-title">{movie.original_title}</h2>
          <p>{movie.release_date}</p>
          <p>{movie.overview}</p>
          <p>{movie.vote_average}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieModal;
