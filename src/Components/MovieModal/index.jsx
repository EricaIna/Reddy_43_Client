import React, { useState, useEffect } from "react";
import "./MovieModal.css";
import { motion } from "framer-motion";
import { AddToListButton, ReviewModal, ViewReviews, RemoveFromListButton } from "..";

export const MovieModal = ({ isOpen, onClose, movie, id, onRemoveFromList, isUserListPage }) => {
  const [userMovies, setUserMovies] = useState([]);
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [showViewReviewsModal, setShowViewReviewsModal] = useState(false);
  const [updateTrigger, setUpdateTrigger] = useState(0); // New state to track updates

  useEffect(() => {
    // Only fetch user movies if the modal is open and movie is available
    if (isOpen && movie) {
      const fetchUserMovies = async () => {
        try {
          const token = localStorage.getItem("accessToken");
          console.log(token);
          const response = await fetch("https://moviestest-env-4.eba-t3hctzae.eu-west-2.elasticbeanstalk.com/user-film-list", {
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
  }, [isOpen, movie, updateTrigger]); // Add dependencies here

  const toggleReviewModal = () => {
    setShowReviewModal(!showReviewModal);
  };
  const handleBackdropClick = () => {
    onClose();
  };

  const handleModalContentClick = (e) => {
    e.stopPropagation();
  };

  const toggleViewReviewsModal = () => {
    setShowViewReviewsModal(!showViewReviewsModal);
  };

  const handleUpdate = () => {
    setUpdateTrigger((prev) => prev + 1); // Increment to trigger useEffect
  };

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
      onClick={handleBackdropClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="modal-content" onClick={handleModalContentClick}>
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
              //saved={isMovieInList}
              movieId={id}
              onSuccess={() => {
                console.log("Button clicked, updating list");
                handleUpdate();
              }}
            />
          ) : (
            <p className="on-your-list">Movie on your list ✔</p>
          )}
          
          <div>
          {isUserListPage && onRemoveFromList && (
          <RemoveFromListButton
            movieId={id}
            onSuccess={() => {
              onRemoveFromList(id);
              onClose(); // Close the modal after removing
            }}
          />
          )}
          </div>
          <div className="review-btns">
            <button onClick={toggleReviewModal} className="leave-review-btn">
              Leave Review
            </button>
            <button
              onClick={toggleViewReviewsModal}
              className="view-review-btn"
            >
              Read Reviews
            </button>
          </div>
          <h2 className="modal-title">
            {movie.original_title}
            <span className="modal-year">({year})</span>
          </h2>
          {/* <p>{movie.release_date}</p> */}

          <p className="modal-rate">Rate : {movie.vote_average.toFixed(1)}</p>
          <p className="modal-description">{movie.overview}</p>
        </div>
      </div>
      {showViewReviewsModal && (
        <motion.div
          className="view-reviews-modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <ViewReviews movieId={id} />
          <button onClick={toggleViewReviewsModal} className="close-review-btn">
            Close Reviews
          </button>
        </motion.div>
      )}
      <ReviewModal
        isOpen={showReviewModal}
        onClose={toggleReviewModal}
        movieId={id}
      />
    </motion.div>
  );
};

export default MovieModal;
