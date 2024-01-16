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
      <div role="card">
        <p className="white_font">{title}</p>
        <button className="button-add" onClick={handleDelete}>Delete</button>
        <button className="button-add" onClick={handleRedirect}>View Details</button>
      </div>
    );
  };
  
  export default ListCard;
