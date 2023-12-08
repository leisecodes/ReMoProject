import React from 'react';

// Object containing book details
const book = {
  title: 'Name of the Book',
  src: 'https://content.codecademy.com/courses/React/react_photo-owl.jpg',
  width:  '200px'
};

// Book component
function Book(){
  return(
    <div>
      
      {/* Displays the book title */}
      <h1>
        {book.title}
      </h1>

       {/* Renders the book image with specified URL, alt text, and width */}
      <img src = {book.src} alt = {book.title} width = {book.width}/>
    </div>
  )
};

export default Book;