// Page for the particular list of user movies
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FilmCard } from "../../Components";
import { useNavigate } from "react-router-dom";

import "./AddToRecommendationsPage.css";


const AddToRecommendationsPage = () => {
  const { id } = useParams();

  const [list, setList] = useState([]);
  const [newText, setNewText] = useState("");

  const navigate = useNavigate();
  
  const handleSearch = async () => {
    try {
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem("accessToken")
        },
         body: JSON.stringify({ text: newText })
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
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem("accessToken")
          },
        };
  
        const response = await fetch(`http://localhost:4000/recommendations_list_manage/${id}/${movie_index}`, options);
  
        navigate(`/recommendation/${id}`);
  
      } catch (error) {
        console.log("Error adding a movie", error);
      }
  };

  return (
    <>
      <form>
        <label className="white_font">
          Title of a movie to search & add to the list of recommendations:
          <input type="text" value={newText} onChange={(e) => setNewText(e.target.value)} />
        </label>
        <button type="button" onClick={handleSearch}>
          Search
        </button>
      </form>

      <ul>
        {list?.map((movie, index) => (
          <li key={index}>
            <p><a href="#" onClick={() => handleAddMovieHref(movie.movie_id) }>{movie.title}</a></p>
            <p>{movie.genres}</p>
            <p>{movie.release_date}</p>
            <p>{movie.overview}</p>
          </li>
        ))}
      </ul>

    </>
  )
};

export default AddToRecommendationsPage
