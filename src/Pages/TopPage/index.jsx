import React, { useState, useEffect } from "react";
import { MovieCard } from "../../Components";

const TopPage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {

    const fetchMovies = async () => {
      try {
        const response = await fetch("http://localhost:4000/movies/top");
        const data = await response.json();
        console.log(data);
        setMovies(data.results);
      } catch (error) {
        console.log("Error Fetching Data");
      }
    };
    fetchMovies();
  }, []);


  return (
    <div className="movies">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          title={movie.title}
          poster={`https://image.tmdb.org/t/p/w500https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          summary={movie.overview}
          year={movie.release_date}
        />
      ))}
    </div>
  );
};

export default TopPage;