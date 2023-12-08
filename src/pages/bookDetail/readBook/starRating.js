import React, { useState } from 'react';
import '../book_RB.css';

{/* Component for the star rating on Read book details page*/}
function StarRating({ rating, onRatingChange }) {

  // State to manage the hovered rating for visual feedback
  const [hoverRating, setHoverRating] = useState(0);

  // Function to handle the click on a star to update the rating
  const handleStarClick = (clickedRating) => {
    // Passes the clicked rating to the parent component
    onRatingChange(clickedRating);
  };

  return (
    // Container for the star rating section
    <div className="star-rating-RB">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star} // Unique key for each star

          // Handles the hovering and clicking of the stars
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
