import React, { useState } from 'react';
import StarRating from './starRating';
import callers from "../../../images/callers.jpg";
import '../book_RB.css';


const BookInfo = ({
    book = {
        "_id": 123,
        "bookID": 567,
        "title": "This is a book",
        "author": "This is the author",
        "illustrator": "This is the illustrator",
        "genre": ["genre", "another one"],
        "summary": "summary",
        "pageCount": 4,
        "excerpt": "words words words",
        "bookTrailerLink": "A link",
        "themes": ["theme1", "theme2"],
        "awards": ["award1", "award2"],
        "copyrightDate": "01/01/1911",
        "form": "poetry",
        "cover": "url"
    },

    input = {
        "_id": 123,
        "inputID": 567,
        "studentID": 890,
        "bookID": 246,
        "dateStarted": "01/01/2001",
        "dateCompleted": "02/02/2002",
        "markRead": false,
        "rank": 1,
        "shelved": true,
        "emoji": "happy",
        "favorite": false,
        "NoteToSelf": "note",
        "review": "review",
        "vote": false,
        "TBR": false,
    }
}) => {
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
        ? 'favorite-button-RB favorite-button-clicked-RB'
        : 'favorite-button-RB';
    

    return (
        <div className="bookInfoContainer-RB" style={containerStyle}>
            <button 
                className={favoriteButtonClass}
                onClick={handleFavoriteClick}
                >
                    &hearts;
            </button>
            
            
            <div className="coverImageRd-RB">
                <img src={book.cover} alt={book.title} />
            </div>
            <div className="bookInfoStyle-RB"> {/* Use the class name from bookInfo.css */}
               
                {/* Book information here */}
                <h2 style={{ marginBottom: '10px' }}> Title: {book.title} </h2>
                <h3 style={{ marginBottom: '10px' }}> Author: {book.author} </h3>
                <h5 style={{ marginBottom: '14px' }}> 
                    My Rating: 
                    <StarRating rating={myRating} onRatingChange={handleRatingChange} />    
                </h5>

                <h5 style={{ marginBottom: '4px' }}> Note-to-Self: </h5>
                
                {/* Text entry box for the note-to-self */}
                <textarea
                    rows="4" 
                    cols="50" 
                    placeholder="Enter your note-to-self here..." 
                    style={{
                        background: 'linear-gradient(to bottom, #f5f5f5, #f0f0f0)',
                        border: '1px solid #00B2A9',
                        borderRadius: '5px',
                        padding: '5px'
                    }}
                ></textarea>

                <h5 className="my-review-RB"> My Review: </h5>
                
                {/* Text entry box for the review */}
                <textarea
                    rows="4" 
                    cols="50" 
                    placeholder="Enter your review here..." 
                    style={{
                        background: 'linear-gradient(to bottom, #f5f5f5, #f0f0f0)',
                        border: '1px solid #00B2A9',
                        borderRadius: '5px',
                        padding: '5px'
                    }}
                ></textarea>



                {/* Quick Feeling Buttons */}
                <div className="button-container-RB">
                  
                    <button className="review-button-RB action-packed-button-RB">
                        Action-packed
                    </button>
                    <button className="review-button-RB cool-characters-button-RB">
                        Cool characters
                    </button>
                    <button className="review-button-RB made-me-laugh-button-RB">
                        Made Me laugh
                    </button>
                </div>

                {/* Action Buttons */}
                <div className="large-button-container-RB">
                    <button className="submit-button-RB" style={{backgroundColor:'#0fbac6' }}>
                        Submit
                    </button>
                    <button className="cancel-button-RB" style={{backgroundColor:'#052489' }}>
                        Cancel
                    </button>
                </div>


            </div>
        </div>
    );

}
export default BookInfo;