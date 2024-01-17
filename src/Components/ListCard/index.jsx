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
    <div className="movie-list-container">
      <div className="title-list">
        <p className="list-name">{title}</p>
      </div>
      <div className="container-buttons">
        <button className="view-btn" onClick={handleRedirect}>
          View
        </button>
        <button className="delete-btn" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default ListCard;
