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

// NEW CODE HERE

import "./ListPage.css";
import React, { useState, useEffect } from "react";
import { MovieCard } from "../../Components";

const ListPage = ({ selectedGenre }) => {
  const [movies, setMovies] = useState([]);
  //  const [genres, setGenres] = useState({});

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch("http://localhost:4000/movies");
        const data = await response.json();
        console.log("MOVIES", data);
        // filtered_data = filter selectedGenre.id === data.genre_id
        // setMovies(filtered_data);

        setMovies(data);
      } catch (error) {
        console.log("Error Fetching Data");
      }
    };
    fetchMovies();
  }, []);

  const handleAddToList = async (movieId) => {
    try {
        const token = localStorage.getItem('accessToken');  
        console.log(token)
      const response = await fetch('http://localhost:4000/user-film-list/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ movies_id: movieId }),
      });

      const data = await response.json();
      console.log(data.message);
    } catch (error) {
      console.error("Error adding movie to list", error);
    }
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
          onAddToList={handleAddToList}
        />
      ))}
    </div>
  );
};

export default ListPage;
