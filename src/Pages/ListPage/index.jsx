import React, { useState, useEffect } from "react";
import { MovieCard } from "../../Components";
import "./ListPage.css";

const ListPage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
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

    fetchMovies();
  }, []);

  return (
    <div className="movies">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          title={movie.original_title}
          poster={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          summary={movie.overview}
          year={movie.release_date}
        />
      ))}
    </div>
  );
};

export default ListPage;

// import React, { useState, useEffect } from 'react'

// const ListPage = () => {
//     const [movies, setMovies] = useState([]);

//     const allMovies = async () => {
//         try{
//             const response = await fetch('http://localhost:4000/movies')
//             const data = await response.json()
//             console.log(data)
//             setMovies(data.data.map(movie => movie.original_title));
//     } catch (error) {
//       console.error('Error fetching movies:', error);

//     }

// };
// useEffect(() => {
//     allMovies();
//   }, []);
//   return (
//     <div>
//       <h1>List of Movies</h1>
//       <ul>
//         {movies.map((title, index) => (
//           <li key={index}>{title}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ListPage
