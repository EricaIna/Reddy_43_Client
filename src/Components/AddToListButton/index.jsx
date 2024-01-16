import React from "react";

const AddToListButton = ({ movieId, onSuccess }) => {
  const handleAddToList = async () => {
    try {
      const token = localStorage.getItem("accessToken");
      const response = await fetch("http://localhost:4000/user-film-list/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ movies_id: movieId }),
      });

      const data = await response.json();
      console.log(data.message);

      if (onSuccess) {
        onSuccess(data.message);
      }
    } catch (error) {
      console.error("Error adding movie to list", error);
    }
  };

  return (
    <button onClick={handleAddToList} className="add-to-list-btn">
      Add to List
    </button>
  );
};

export default AddToListButton;
