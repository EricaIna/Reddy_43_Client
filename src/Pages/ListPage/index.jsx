// import "./ListPage.css";
// import React, { useState, useEffect } from "react";
// import { MovieCard } from "../../Components";

// const ListPage = () => {
//   const [movies, setMovies] = useState([]);
//   const [genres, setGenres] = useState({});

//   useEffect(() => {
//     const fetchGenres = async () => {
//       const genreResponse = await fetch("http://localhost:4000/genres");
//       const genreData = await genreResponse.json();
//       console.log(genreData);
//       const genreMap = genreData.genres.reduce((map, genre) => {
//         map[genre.id] = genre.name;
//         return map;
//       }, {});
//       setGenres(genreMap);
//       console.log(genreMap);
//     };
//     // setGenres(genreMap);
//     // console.log(genreMap);

//     const fetchMovies = async () => {
//       try {
//         const response = await fetch("http://localhost:4000/movies");
//         const data = await response.json();
//         console.log(data);
//         setMovies(data.results);
//       } catch (error) {
//         console.log("Error Fetching Data");
//       }
//     };
//     fetchGenres();
//     fetchMovies();
//   }, []);

//   const getGenreNames = (genreIds) =>
//     genreIds.map((id) => genres[id]).filter((name) => name);

//   return (
//     <div className="movies">
//       {movies.map((movie) => (
//         <MovieCard
//           key={movie.id}
//           title={movie.title}
//           poster={movie.poster_path}
//           summary={movie.overview}
//           year={movie.release_date}
//           genre={getGenreNames(movie.genre_ids)}
//         />
//       ))}
//     </div>
//   );
// };

// export default ListPage;

// ANOTHER NEW CODE🍎🍎

import React, { useState, useEffect } from "react";
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
    <div className="movies">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          id={movie.id}
          title={movie.title}
          poster={movie.poster_path}
          summary={movie.overview}
          year={movie.release_date}
          genre={""}
          onClick={() => handleMovieCardClick(movie)}
        />
      ))}

      <MovieModal
        isOpen={isModalOpen}
        onClose={closeModal}
        movie={selectedMovie}
      />
    </div>
  );
};

export default ListPage;
