import React, { useState, useEffect } from "react";
import { MovieCard } from "../../Components";
import "./UserListPage.css";
import { MovieModal } from "../../Components/MovieModal";

const UserListPage = () => {
  const [userMovies, setUserMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  //MODAL
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    const fetchUserMovies = async () => {
      setIsLoading(true);
      try {
        const token = localStorage.getItem("accessToken");
        console.log(token);
        const response = await fetch("http://localhost:4000/user-film-list", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error("Could not fetch user movies");
        }

        const data = await response.json();
        setUserMovies(data);
      } catch (error) {
        console.error("Error fetching user's movie list:", error);
      }
      setIsLoading(false);
    };

    fetchUserMovies();
  }, []);

  const handleRemoveFromList = async (movieId) => {
    try {
      const token = localStorage.getItem("accessToken");
      const response = await fetch("http://localhost:4000/user-film-list/remove", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ movie_id: movieId }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to remove the movie from the list");
      }
        // Update the userMovies state to reflect the removal
        setUserMovies((currentMovies) => currentMovies.filter(movie => movie.id !== movieId));

        console.log("Movie removed from the list successfully");
      } catch (error) {
        console.error("Error removing movie from list:", error);
      }
    }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!userMovies.length) {
    return <div className="no-movie">No movies in your list.</div>;
  }

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
      <h1 className="Mylist-h1">Your Movie List</h1>
      <div className="movie-list">
        {userMovies.map((movie) => (
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
          id={selectedMovie?.id}
          onRemoveFromList={handleRemoveFromList}
          isUserListPage={true}
        />
      </div>
    </>
  );
};

export default UserListPage;
