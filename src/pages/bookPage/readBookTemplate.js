import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./templateStyles.css";

const ReadBookTemplate = (
    {
        // Default book object with various properties
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
    }
    
) => {


return (
    // List item containing book details
    <li className="list-group-item">
    <div className="row">
      <div className="col-10">
      <div>
        {

        // Link to book details page based on book ID
        <Link to = {`/bookdetails/read/${book.bookID}`} key={book._id}>
        <img className='image' src={book.cover} alt={book.title}/>
        </Link> 
}
      </div>
      </div>
    </div>
  </li>
);
};

export default ReadBookTemplate;