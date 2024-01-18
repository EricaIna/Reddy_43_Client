import React, { useState, useEffect } from "react";
import { MovieCard } from "../../Components";
import "./UpcomingPage.css";
import { motion } from "framer-motion";
import { MovieModal } from "../../Components/MovieModal";

const UpcomingPage = () => {
  const [movies, setMovies] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch("http://localhost:4000/movies/recent");
        const data = await response.json();
        console.log(data);
        setMovies(data.results);
      } catch (error) {
        console.log("Error Fetching Data");
      }
    };
    fetchMovies();
  }, []);

  // MODAL OPEN
  const handleMovieCardClick = (movie) => {
    setSelectedMovie(movie);
    console.log("Movie info is here:", movie);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedMovie(null);
    setIsModalOpen(false);
  };

  return (
    <div className="upcoming-page">
      <h1 className="upcoming-h1">Upcoming and Popular</h1>

      <motion.div
        className="movie-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2.0, delay: 1.5 }}
      >
        {movies.map((movie) => (
          <MovieCard
            className="upcoming-movie"
            key={movie.id}
            title={movie.title}
            poster={`https://image.tmdb.org/t/p/w500https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            summary={movie.overview}
            year={movie.release_date}
            onClick={() => handleMovieCardClick(movie)}
          />
        ))}

        <MovieModal
          isOpen={isModalOpen}
          onClose={closeModal}
          movie={selectedMovie}
        />
      </motion.div>
    </div>
  );
};

export default UpcomingPage;
