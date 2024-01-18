import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const ListCard = ({ id, title, onDelete }) => {
  const navigate = useNavigate();
  const handleDelete = () => {
    onDelete(id);
  };

  const handleRedirect = () => {
    navigate(`/recommendation/${id}`);
  };

  return (
    <motion.div
      className="list-name-container"
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="title-list">
        <p className="list-name">{title}</p>
      </div>
      <div role="card" className="container-buttons">
        <motion.button
          className="view-btn"
          onClick={handleRedirect}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          View
        </motion.button>
        <motion.button
          className="delete-btn"
          onClick={handleDelete}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Delete
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ListCard;
