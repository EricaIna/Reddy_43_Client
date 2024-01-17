import React from "react";
import { motion } from "framer-motion";
import { LeaveReview } from ".."; 

const ReviewModal = ({ isOpen, onClose, movieId }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <motion.div
      className="modal-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose} 
    >
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="modal-close">✖️</button>
        <LeaveReview movieId={movieId} />
      </div>
    </motion.div>
  );
};

export default ReviewModal;
