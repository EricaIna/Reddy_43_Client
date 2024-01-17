import React from "react";

const FilmCard = ({ id, movie_id, title, onDelete }) => {
  console.log("Type of movie_id= ", typeof movie_id, "Type of id", typeof id);
  const handleDelete = () => {
    onDelete(id, movie_id);
  };

  return (
    <div role="card" className="movie-list-container">
      <div className="added-movie-area">
        <p className="white-font">{title}</p>
      </div>
      <div className="container-buttons">
        <button className="button-add" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default FilmCard;
