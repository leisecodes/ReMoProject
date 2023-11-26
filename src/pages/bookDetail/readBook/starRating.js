import React, { useState } from 'react';
import '../book_RB.css';


function StarRating({ rating, onRatingChange }) {
  const [hoverRating, setHoverRating] = useState(0);

  const handleStarClick = (clickedRating) => {
    onRatingChange(clickedRating);
  };

  return (
    <div className="star-rating-RB">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={`star-RB ${star <= (hoverRating || rating) ? 'selected' : ''}`}
          onClick={() => handleStarClick(star)}
          onMouseEnter={() => setHoverRating(star)}
          onMouseLeave={() => setHoverRating(0)}
        >
          ★
        </span>
      ))}
    </div>
  );
}

export default StarRating;
