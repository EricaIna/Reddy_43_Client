import React, { useState, useEffect, useMemo } from "react";
import { MovieCard } from "../../Components/MovieCard";
import { MovieModal } from "../../Components/MovieModal";
import "./ListPage.css";

const ListPage = ({ selectedGenre }) => {
  const [movies, setMovies] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch("http://localhost:4000/movies");
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
      <div className="movies">
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
      </div>
    </>
  );
};

export default ListPage;
