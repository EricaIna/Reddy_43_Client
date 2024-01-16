// Page for the particular list of user movies
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FilmCard } from "../../Components";
import { useNavigate } from "react-router-dom";
import "./ListRecommendationsPage.css";


const ListRecommendationsPage = () => {
  const { id } = useParams();

  const [list, setList] = useState([]);

  const navigate = useNavigate();
  
  useEffect(() => {

    const fetchListsById = async () => {
      try {
        const options = {
            method: 'GET',
            headers: {
                
                'Authorization': 'Bearer ' +localStorage.getItem("accessToken")
            }
        }
             
        const response = await fetch(`http://localhost:4000/recommendations_list/${id}`,options);
        const data = await response.json();
        console.log("After fetching Data");
        // console.log("Data=",data.movies[0].title);
        console.log("Data=",data);
        setList(data);
      } catch (error) {
        console.log("Error Fetching Data ",error);
      }
    };
   
    fetchListsById();
  }, []);

  const handleRecomend = async () => {
    try {
      const options = {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem("accessToken")
        },
        // body: JSON.stringify({ title: newTitle }) 
      };

      const response = await fetch(`http://localhost:4000/recommendations_list_recommend/${id}`, options);
      window.location.reload();

    } catch (error) {
      console.log("Error recommending a movie", error);
    }
  };

  const handleSearch = () => {
    navigate(`/search/${id}`);
  };

  return (
    <>
        <h2 className="white_h2">{list.title}</h2>

        <ul>
        {list.movies?.map((movie, index) => (
          <li key={index}>
            <p className="white_par">{movie.title}</p>
          </li>
        ))}
      </ul>

      <button type="button" onClick={handleRecomend}>
          Recommend a movie
        </button>

      <button type="button" onClick={handleSearch}>
          Search a movie to add into the list
        </button>

    </>
  )
};

export default ListRecommendationsPage;
