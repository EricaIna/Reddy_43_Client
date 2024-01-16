import React from "react";


const FilmCard = ({ id,movie_id, title,onDelete }) => {
    console.log("Type of movie_id= ", typeof movie_id,"Type of id",typeof id)
    const handleDelete = () => {
      onDelete(id,movie_id);
    };

    
    return (
      <div role="card">
        <p className="color_white">{title}</p>
        <button onClick={handleDelete}>Delete</button>
        {/* <button onClick={handleRedirect}>View Details</button> */}
      </div>
    );
  };
  
  export default FilmCard;
