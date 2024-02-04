import React, { useState } from "react";

const LeaveReview = ({ movieId }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [rating, setRating] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("accessToken");
    const reviewData = {
      movies_id: movieId,
      title,
      content,
      rating: parseInt(rating, 10),
    };
    try {
      const response = await fetch("http://moviestest-env-4.eba-t3hctzae.eu-west-2.elasticbeanstalk.com/reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(reviewData),
      });

      if (!response.ok) {
        const errorDetails = await response.json();
        console.error("Server responded with:", errorDetails);
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Review submitted:", data);
      setIsSubmitted(true);
    } catch (error) {
      console.error("Error posting review:", error);
    }
  };
  if (isSubmitted) {
    return <div role="review" className="leave-review-area" style={{ fontSize: '24px', textAlign: 'center', marginTop: '20px' }}>Thank you for leaving your review!</div>;
  }

  return (
    <div role="review" className="leave-review-area">
      <h2>Leave a Review</h2>
      <form onSubmit={handleSubmit}>
        {/* <div>
          <label>Movie ID:</label>
          <input
            type="number"
            value={movieId}
            onChange={(e) => setMovieId(e.target.value)}
            placeholder='id'
          />
        </div> */}
        <div className="leave-title">
          <label>Title:</label>
          <input
            className="custom-input"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="title"
          />
        </div>
        <div className="leave-content">
          <label>Content:</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="review"
          ></textarea>
        </div>
        <div className="leave-rating">
          <label>Rating:</label>
          <input
            className="rating-num"
            type="number"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            placeholder="rating"
            min="1"
            max="5"
          />
        </div>
        <button type="submit">Submit Review</button>
      </form>
    </div>
  );
};

export default LeaveReview;
