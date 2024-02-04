import React, { useState, useEffect, useMemo } from "react";
import { MovieCard } from "../../Components/MovieCard";
import { MovieModal } from "../../Components/MovieModal";
import "./ListPage.css";
import { motion } from "framer-motion";

const ListPage = ({ selectedGenre }) => {
  const [movies, setMovies] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch("http://moviestest-env-4.eba-t3hctzae.eu-west-2.elasticbeanstalk.com/movies");
        const data = await response.json();
        setMovies(data);
      } catch (error) {
        console.log("Error Fetching Data");
      }
    };
    fetchMovies();
  }, []);

  const filteredMovies =
    selectedGenre && selectedGenre.length > 0
      ? movies.filter((movie) =>
          selectedGenre.every((genre) => movie.genres.includes(genre))
        )
      : movies;
  console.log("FIL", filteredMovies, selectedGenre);

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
    <>
      <div className="divider"></div>
      <motion.div
        className="movies"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2.0, delay: 1.0 }}
      >
        {filteredMovies.map((movie) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            title={movie.title}
            poster={movie.poster_path}
            summary={movie.overview}
            year={new Date(movie.release_date).getFullYear()} // Extract only the year
            genre={movie.genres.join(", ")}
            onClick={() => handleMovieCardClick(movie)}
          />
        ))}

        <MovieModal
          isOpen={isModalOpen}
          onClose={closeModal}
          movie={selectedMovie}
          id={selectedMovie?.id}
        />
      </motion.div>
    </>
  );
};

export default ListPage;
