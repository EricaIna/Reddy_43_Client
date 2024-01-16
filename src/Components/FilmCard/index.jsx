import React from "react";
import { useNavigate } from "react-router-dom";

const FilmCard = ({ id, title, onDelete }) => {
    const navigate = useNavigate();
    const handleDelete = () => {
      onDelete(id);
    };

    const handleRedirect = () => {
        // Redirect to the page with the specific id
        navigate(`/recommendation/${id}`);
      };
  
    return (
      <div role="card">
        <p className="color_white">{title}</p>
        <button onClick={handleDelete}>Delete</button>
        <button onClick={handleRedirect}>View Details</button>
      </div>
    );
  };
  
  export default FilmCard;
