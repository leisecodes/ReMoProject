import React from 'react';

import Tags from './tags';
import '../book_UB.css';


const BookInfo = ({
    // default book object
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
    }
}) => {
    // Style for the container holding book information
    const containerStyle = {
        display: 'flex',
        alignItems: 'center',
    };

    return (
        // Container for book info & cover
        <div className="bookInfoContainer-UB" style={containerStyle}>
            
            {/* Cover image */}
            <div className="coverImage-UB">
                <img src={book.cover} alt={book.title} />
            </div>

            {/* Book info container */}
            <div className="bookInfoStyle-UB"> 
            
                {/* Book info*/}
                <h2 style={{ marginBottom: '4px' }}> <span class="fw-bold">Title:</span> {book.title} </h2>
                <p style={{ marginBottom: '2px' }}><span class="fw-bold">Author:</span> {book.author} </p>
                <p style={{ marginBottom: '2px' }}><span class="fw-bold">Illustrator:</span> {book.illustrator} </p>
                <p style={{ marginBottom: '2px' }}><span class="fw-bold">Copyright Date:</span> {book.copyrightDate} </p>
                <p style={{ marginBottom: '2px' }}><span class="fw-bold"> Genre: </span> {book.genre} </p>
                <p style={{ marginBottom: '2px' }}><span class="fw-bold">Page Count:</span> {book.pageCount} </p>
                <p style={{ marginBottom: '2px' }}><span class="fw-bold">Summary:</span> {book.summary} </p>

                {/* Line separating book info and buttons */}
                <div className="info-separator-style-UB"> </div>

                {/* Tag reference  */}
                <Tags />
            </div>
        </div>
    );

}
export default BookInfo;