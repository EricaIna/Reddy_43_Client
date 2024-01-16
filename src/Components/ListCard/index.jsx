import React from "react";
import { useNavigate } from "react-router-dom";

const ListCard = ({ id, title, onDelete }) => {
    const navigate = useNavigate();
    const handleDelete = () => {
      onDelete(id);
    };

    const handleRedirect = () => {
        navigate(`/recommendation/${id}`);
      };
  
    return (
    <div role="card" className="movie-list-container">
        <div className="title-list"><p className="white-font ">{title}</p></div>
        <div className="container-buttons">
          <button className="button-add" onClick={handleDelete}>Delete</button>
          <button className="button-add" onClick={handleRedirect}>View Details</button>
        </div>
      </div>
    );
  };
  
  export default ListCard;
