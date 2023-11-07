import React, { useState } from 'react';
import StarRating from './starRating';
import callers from "../../../images/callers.jpg";
import '../book.css';


function BookInfo() {
    const [isFavorite, setIsFavorite] = useState(false);
    const [myRating, setMyRating] = useState(0);

    const containerStyle = {
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
    };

    const handleFavoriteClick = () => {
        setIsFavorite(!isFavorite);
    };

    const handleRatingChange = (newRating) => {
        setMyRating(newRating);
      };

    const favoriteButtonClass = isFavorite
        ? 'favorite-button favorite-button-clicked'
        : 'favorite-button';
    

    return (
        <div className="bookInfoContainer" style={containerStyle}>
            <button 
                className={favoriteButtonClass}
                onClick={handleFavoriteClick}
                >
                    &hearts;
            </button>
            
            
            <div className="coverImageRd">
                <img src={callers} alt="Book Cover" />
            </div>
            <div className="bookInfoStyle"> {/* Use the class name from bookInfo.css */}
               
                {/* Book information here */}
                <h2 style={{ marginBottom: '10px' }}> Title: </h2>
                <h5 style={{ marginBottom: '14px' }}> 
                    My Rating: 
                    <StarRating rating={myRating} onRatingChange={handleRatingChange} />    
                </h5>



                <h5 style={{ marginBottom: '4px' }}> My Review: </h5>
                
                {/* Text entry box for the review */}
                <textarea
                    rows="4" 
                    cols="50" 
                    placeholder="Enter your review here..." // A placeholder text
                    style={{
                        background: 'linear-gradient(to bottom, #f5f5f5, #f0f0f0)',
                        border: '1px solid #ccc',
                        borderRadius: '5px',
                        padding: '5px'
                    }}
                ></textarea>


                {/* Button references here */}
                <div className="button-container">
                    {/* Assign class names to buttons for different colors */}
                    <button className="review-button action-packed-button">
                        Action-packed
                    </button>
                    <button className="review-button cool-characters-button">
                        Cool characters
                    </button>
                    <button className="review-button made-me-laugh-button">
                        Made Me laugh
                    </button>
                </div>

                <div className="large-button-container">
                    <button className="submit-button" style={{backgroundColor:'#052489' }}>
                        Submit
                    </button>
                    <button className="cancel-button" style={{backgroundColor:'#052489' }}>
                        Cancel
                    </button>
                </div>


            </div>
        </div>
    );

}
export default BookInfo;