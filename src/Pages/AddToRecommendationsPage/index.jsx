// Page for the particular list of user movies
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FilmCard } from "../../Components";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
const AddToRecommendationsPage = () => {
  const { id } = useParams();

  const [list, setList] = useState([]);
  const [newText, setNewText] = useState("");

  const navigate = useNavigate();
  const handleRedirect = () => {
    navigate(`/recommendation/${id}`);
  };

  const handleSearch = async () => {
    try {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("accessToken"),
        },
        body: JSON.stringify({ text: newText }),
      };

      const response = await fetch(`http://localhost:4000/search`, options);
      const data = await response.json();

      // Update the list with the new data
      setList(data.movies);

      // Clear the input field after adding a new element
      //setNewText("");
    } catch (error) {
      console.log("Error searching for a movie", error);
    }
  };

  const handleAddMovieHref = async (movie_index) => {
    //e.preventDefault();
    try {
      const options = {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("accessToken"),
        },
      };

      const response = await fetch(
        `http://localhost:4000/recommendations_list_manage/${id}/${movie_index}`,
        options
      );

      navigate(`/recommendation/${id}`);
    } catch (error) {
      console.log("Error adding a movie", error);
    }
  };

  return (
    <>
      <h1 className="title list-h1 ">Search and Add</h1>
      <form className="form-container">
        <label className="label-new-list white-font">
          {/* Title of a movie to search & add to the list of recommendations: */}
          Search for movie
          <input
            type="text"
            className="input-title"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
        </label>
        <motion.button
          className="button-add"
          type="button"
          onClick={handleSearch}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Search
        </motion.button>
        <motion.button
          className="button-back"
          onClick={handleRedirect}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Back to the list
        </motion.button>
      </form>

      <motion.ul
        className="many-movies"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <li>
          <div className="movie-description-hat">
          <div className="movie-title-rec hat-table">
              <p>         </p>
            </div>
            <div className="movie-title-rec hat-table">
              <p>Movie Title</p>
            </div>
            <div className="movie-genres-rec hat-table">
              <p>Genre</p>
            </div>
            <div className="movie-release-rec hat-table">
              <p>Release Date</p>
            </div>
            <div className="movie-overview-rec hat-table">
              <p>Overview</p>
            </div>
          </div>
        </li>
        {list?.map((movie, index) => (
          <li key={index}>
             
            <div className="movie-description">
              <div className="movie-title-rec">
                    <motion.button
                  className="button-add"
                  type="button"
                  onClick={() => handleAddMovieHref(movie.movie_id)} 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >Add
                  </motion.button>

              </div>

              <div className="movie-title-rec">
                <motion.p
                  className="result-movie-title"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
        
                    {movie.title}
                  
                </motion.p>
              </div>

              <div className="movie-genres-rec">
                <p>{movie.genres}</p>
              </div>
              <div className="movie-release-rec">
                <p>{movie.release_date}</p>
              </div>
              <div className="movie-overview-rec">
                <p>{movie.overview}</p>
              </div>
            </div>
          </li>
        ))}
      </motion.ul>
    </>
  );
};

export default AddToRecommendationsPage;
