// Page for the particular list of user movies
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FilmCard } from "../../Components";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const ListRecommendationsPage = () => {
  const { id } = useParams();

  const [list, setList] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchListsById = async () => {
      try {
        const options = {
          method: "GET",
          headers: {
            Authorization: "Bearer " + localStorage.getItem("accessToken"),
          },
        };

        const response = await fetch(
          `https://ericainamoviesapi.co.uk/recommendations_list/${id}`,
          options
        );
        const data = await response.json();
        console.log("After fetching Data");
        // console.log("Data=",data.movies[0].title);
        console.log("Data=", data);
        setList(data);
      } catch (error) {
        console.log("Error Fetching Data ", error);
      }
    };

    fetchListsById();
  }, []);

  const handleRecomend = async () => {
    try {
      const options = {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("accessToken"),
        },
      };

      const response = await fetch(
        `https://ericainamoviesapi.co.uk/recommendations_list_recommend/${id}`,
        options
      );
      window.location.reload();
    } catch (error) {
      console.log("Error recommending a movie", error);
    }
  };

  const handleSearch = () => {
    navigate(`/search/${id}`);
  };

  const removeMovie = (movies_list, movie_index) => {
    const newMovieList = JSON.parse(JSON.stringify(movies_list));
    newMovieList.movies.splice(movie_index, 1);
    newMovieList.movies_id.splice(movie_index, 1);
    return newMovieList;
  };

  // Deleteng movie from the list
  const handleDeleteFromList = async (id, movie_id) => {
    try {
      const options = {
        method: "DELETE",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("accessToken"),
        },
      };

      const response = await fetch(
        `https://ericainamoviesapi.co.uk/recommendations_list_manage/${id}/${movie_id}`,
        options
      );
      const data = await response.json();
      console.log("response after deleting=", data);
      if (response.ok) {
        // Remove the deleted item from the list
        console.log("list.movies_id = ", list.movies_id);
        console.log("list.movies = ", list.movies);
        const movie_index = list.movies_id.indexOf(movie_id);
        setList((prevList) => removeMovie(prevList, movie_index));
        console.log(`Movie with ID ${movie_id} deleted successfully`);
      } else {
        console.log(
          `Error deleting movie with ID ${movie_id} in the list ${id}`
        );
      }
    } catch (error) {
      console.log(`Error Deleting from List  ${id}`, error);
    }
  };

  return (
    <div className="personal-body">
      <h2 className="personal-list">{list.title}</h2>
      <div className="personalList-area">
        <div className="buttons-rec">
          <motion.button
            type="button"
            className="button-recommend"
            onClick={handleRecomend}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
          >
            Recommend me a movie
          </motion.button>

          <motion.button
            type="button"
            className="button-recommend"
            onClick={handleSearch}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
          >
            Search for a movie and add to list
          </motion.button>
        </div>
        <div className="personal-movie-list">
          {list.movies?.map((movie, index) => (
            <FilmCard
              key={index}
              id={id}
              movie_id={list.movies_id?.[index]}
              title={movie.title}
              onDelete={handleDeleteFromList}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListRecommendationsPage;
