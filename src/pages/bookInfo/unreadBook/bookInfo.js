import React from 'react';
import culturedDonut from "../../../images/culturedDonut.webp";
import Tags from './tags';
import '../book_UB.css';


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
    }
}) => {

    const containerStyle = {
        display: 'flex',
        alignItems: 'center',
    };

    return (
        <div className="bookInfoContainer-UB" style={containerStyle}>
            <div className="coverImage-UB">
                <img src={book.cover} alt={book.title} />
            </div>
            <div className="bookInfoStyle-UB"> 
                {/* Book information here */}
                <h2 style={{ marginBottom: '4px' }}> Title: {book.title} </h2>
                <p style={{ marginBottom: '2px' }}>Author: {book.author} </p>
                <p style={{ marginBottom: '2px' }}>Illustrator: {book.illustrator} </p>
                <p style={{ marginBottom: '2px' }}>Copyright Date: {book.copyrightDate} </p>
                <p style={{ marginBottom: '2px' }}>Genre: {book.genre} </p>
                <p style={{ marginBottom: '2px' }}>Page Count: {book.pageCount} </p>
                <p style={{ marginBottom: '2px' }}>Summary: {book.summary} </p>

                <div className="info-separator-style-UB">

                </div>

                {/* Tag reference here */}
                <Tags />
            </div>
        </div>
    );

}
export default BookInfo;