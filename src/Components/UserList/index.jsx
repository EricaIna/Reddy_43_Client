import React, { useState, useEffect } from "react";
import axios from "axios";

const UserMovieList = () => {
  const [movies, setMovies] = useState([]);
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    fetchMovies();
    fetchUserList();
  }, []);

  const fetchMovies = async () => {
    try {
      const response = await axios.get('https://ericainamoviesapi.co.uk/movies');

      setMovies(response.data);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  const fetchUserList = async () => {
    try {
        const userId = localStorage.getItem('userId')
        console.log(userId)
        const accessToken = localStorage.getItem('accessToken')    
        console.log(accessToken)
      const response = await axios.get(`https://ericainamoviesapi.co.uk/user-film-list/${userId}`,{
        headers: {
            Authorization: `Bearer ${accessToken}` 
          }
        })
      
      setUserList(response.data);
    } catch (error) {
      console.error("Error fetching user list:", error);
    }
  };

  const addToUserList = async (movieId) => {
    try {
      await axios.post('https://ericainamoviesapi.co.uk/user-film-list/add', { movie_id: movieId });

    } catch (error) {
      console.error("Error adding movie to list:", error);
    }
  };

  const removeFromUserList = async (movieId) => {
    try {
      await axios.delete('https://ericainamoviesapi.co.uk/user-film-list/remove', { data: { movie_id: movieId } });

    } catch (error) {
      console.error("Error removing movie from list:");
    }
  };

  return (
    <div data-testid="movies-list-1">
      {movies.map((movie) => (
        <div key={movie.id}>
          <h3>{movie.title}</h3>
          {/* Add other movie details */}
          <button onClick={() => addToUserList(movie.id)}>Add to List</button>
          <button onClick={() => removeFromUserList(movie.id)}>
            Remove from List
          </button>
        </div>
      ))}
    </div>
  );
};

export default UserMovieList;
