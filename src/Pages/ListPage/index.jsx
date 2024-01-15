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
  const [selectedId, setSelectedId] = useState(null);

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

  // return (
  //   <div className="movies">
  //     {movies.map((movie) => (
  //       <MovieCard
  //         key={movie.id}
  //         title={movie.title}
  //         poster={movie.poster_path}
  //         summary={movie.overview}
  //         year={movie.release_date}
  //         genre={""}
  //         onClick={() => setSelectedId(movie.id)} // クリック時に詳細ビューを表示
  //       />
  //     ))}
  //   </div>
  // );
  return (
    <div className="movies">
      {movies.map((movie) => (
        <div key={movie.id}>
          <MovieCard
            title={movie.title}
            poster={movie.poster_path}
            summary={movie.overview}
            year={movie.release_date}
            genre={""}
            onClick={() => setSelectedId(movie.id)} // クリック時に詳細ビューを表示
          />
          {/* 選択された映画の詳細ビュー */}
          {selectedId === movie.id && (
            <div className="movie-detail">
              <h2>{movie.title}</h2>
              <p>{movie.overview}</p>
              <button onClick={() => setSelectedId(null)}>Close</button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ListPage;
