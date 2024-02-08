import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const ViewReviews = ({ movieId }) => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `https://ericainamoviesapi.co.uk/reviews/${movieId}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch reviews");
        }
        const data = await response.json();
        setReviews(data.reviews);
      } catch (err) {
        setError(err.message);
      }
      setIsLoading(false);
    };

    if (movieId) {
      fetchReviews();
    }
  }, [movieId]);

  if (isLoading) {
    return <div>Loading reviews...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <motion.div role="review" className="viewReview">
      <h2>Reviews</h2>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map((review) => (
            <li className="reviewPost" key={review.id}>
              <h3>{review.Title}</h3>
              <p className="view-review-rate">Rating: {review.Rating}</p>
              <p>{review.Content}</p>
              <p>
                Reviewed on: {new Date(review.Timestamp).toLocaleDateString()}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No reviews available for this movie.</p>
      )}
    </motion.div>
  );
};

export default ViewReviews;
