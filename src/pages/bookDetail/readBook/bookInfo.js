import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { findInputsThunk, updateInputThunk } from "../../../services/inputs-thunks.js";
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
        "review": "",
        "vote": false,
        "TBR": false,
    }
}) => {
    const [isFavorite, setIsFavorite] = useState(false);
    const [myRating, setMyRating] = useState(0);
    
    const { inputs, loading } = useSelector((state)=> state.inputs);
   

    const dispatch = useDispatch();
    useEffect(()=> {
        dispatch(findInputsThunk({}))
    }, [])


    const containerStyle = {
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
    };

    const filteredInput = inputs.filter((input)=>((input.bookID===book.bookID && input.studentID===2)));
    const noteToSelf = filteredInput.map((input)=>input.NoteToSelf);
    const bookReview = filteredInput.map((input)=>input.review);
    const favorite = filteredInput.map((input)=>input.favorite);
    
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
                <img src={book.cover} alt={book.title} />
            </div>
            <div className="bookInfoStyle"> {/* Use the class name from bookInfo.css */}
               
                {/* Book information here */}
                <h1>{input.favorite} </h1>
                <h2 style={{ marginBottom: '10px' }}> Title: {book.title} </h2>
                <h3 style={{ marginBottom: '10px' }}> Author: {book.author} </h3>
                <h5 style={{ marginBottom: '14px' }}> 
                    My Rating:
                    <StarRating rating={filteredInput.map(input=>input.rank)} onRatingChange={handleRatingChange} />    
                </h5>
                <h5 style={{ marginBottom: '4px' }}> Note-to-Self: </h5>
                
                {/* Text entry box for the note */}
                {/*render text input box if no recorded note*/}
                {noteToSelf.toString() === "" && 
                <textarea
                    rows="4" 
                    cols="50" 
                    placeholder="Enter your note-to-self here..." 
                    style={{
                        background: 'linear-gradient(to bottom, #f5f5f5, #f0f0f0)',
                        border: '1px solid #ccc',
                        borderRadius: '5px',
                        padding: '5px'
                    }}
                ></textarea>
                }
                {/*render saved note*/}
                {noteToSelf.toString() !== "" &&
                <p style={{
                    background: 'linear-gradient(to bottom, #f5f5f5, #f0f0f0)',
                    border: '1px solid #ccc',
                    borderRadius: '5px',
                    padding: '5px'
                }}>{noteToSelf}</p>
                }

                <h5 style={{ marginBottom: '4px' }}> My Review: </h5>
                
                {/* Text entry box for the review */}
                {(bookReview.toString() === "") && 
                <textarea
                    rows="4" 
                    cols="50" 
                    placeholder="Enter your review here..." 
                    style={{
                        background: 'linear-gradient(to bottom, #f5f5f5, #f0f0f0)',
                        border: '1px solid #ccc',
                        borderRadius: '5px',
                        padding: '5px'
                    }}
                ></textarea>
                }
                {bookReview.toString() !== "" &&
                <p style={{
                    background: 'linear-gradient(to bottom, #f5f5f5, #f0f0f0)',
                    border: '1px solid #ccc',
                    borderRadius: '5px',
                    padding: '5px'
                }}>{bookReview}</p>
                }
                


                {/* Quick Feeling Buttons */}
                <div className="button-container">
                  
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

                {/* Action Buttons */}
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