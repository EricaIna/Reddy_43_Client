import React from "react";
import { motion } from "framer-motion";

const RemoveFromListButton = ({ movieId, onSuccess }) => {
  const handleRemoveFromList = async () => {
    try {
      const token = localStorage.getItem("accessToken");
      const response = await fetch("http://localhost:4000/user-film-list/remove", {
        method: "DELETE",
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
      console.error("Error removing movie from list", error);
    }
  };

  return (
    <motion.button
      onClick={handleRemoveFromList}
      className="remove-from-list-btn"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ duration: 0.5 }}
    >
      Remove from List
    </motion.button>
  );
};

export default RemoveFromListButton;
