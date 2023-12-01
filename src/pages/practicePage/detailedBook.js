import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const DetailedBook = (
    {
    
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
    <li className="list-group-item">
    <div className="row">
      <div className="col-10">
      <div>
        
        <img class= "w-25" src={book.cover} alt={book.title}/>
        <p>{book.title}</p>
        <p>{book.author}</p>
      </div>
      </div>
    </div>
  </li>
);
};

export default DetailedBook;