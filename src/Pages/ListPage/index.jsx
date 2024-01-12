import React, { useState, useEffect } from "react";
import { MovieCard } from "../../Components";
import "./ListPage.css";

const ListPage = () => {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState({});

  useEffect(() => {
    const fetchGenres = async () => {
      const genreResponse = await fetch("http://localhost:4000/genres");
      const genreData = await genreResponse.json();
      const genreMap = genreData.genres.reduce((map, genre) => {
        map[genre.id] = genre.name;
        return map;
      }, {});
      setGenres(genreMap);
    };

    const fetchMovies = async () => {
      try {
        const response = await fetch("http://localhost:4000/movies");
        const data = await response.json();
        console.log(data);
        setMovies(data.results);
      } catch (error) {
        console.log("Error Fetching Data");
      }
    };
    fetchGenres();
    fetchMovies();
  }, []);

  const getGenreNames = (genreIds) =>
    genreIds.map((id) => genres[id]).filter((name) => name);

  return (
    <div className="movies">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          title={movie.title}
          poster={movie.poster_path}
          summary={movie.overview}
          year={movie.release_date}
          genre={getGenreNames(movie.genre_ids)}
        />
      ))}
    </div>
  );
};

export default ListPage;
