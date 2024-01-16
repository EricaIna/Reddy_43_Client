import React, { useState } from 'react';

const LeaveReview = () => {
  const [movieId, setMovieId] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [rating, setRating] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("accessToken")
    const reviewData = {
        title,
        movies_id: parseInt(movieId, 10),
        content,
        rating: parseInt(rating, 10)
      };

    try {
      const response = await fetch('http://localhost:4000/reviews', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}` 
        },
        body: JSON.stringify(reviewData),
      });

      if (!response.ok) {
        const errorDetails = await response.json(); 
        console.error('Server responded with:', errorDetails);
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      console.log('Review submitted:', data);
    } catch (error) {
      console.error('Error posting review:', error);
    }
  };

  return (
    <div>
      <h2>Leave a Review</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Movie ID:</label>
          <input
            type="number"
            value={movieId}
            onChange={(e) => setMovieId(e.target.value)}
            placeholder='id'
          />
        </div>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder='title'
          />
        </div>
        <div>
          <label>Content:</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder='review'
          ></textarea>
        </div>
        <div>
          <label>Rating:</label>
          <input
            type="number"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            placeholder='rating'
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
