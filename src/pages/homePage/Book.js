import React from 'react';

const book = {
  title: 'Name of the Book',
  src: 'https://content.codecademy.com/courses/React/react_photo-owl.jpg',
  width:  '200px'
};

function Book(){
  return(
    <div>
      <h1>
        {book.title}
      </h1>
      <img src = {book.src} alt = {book.title} width = {book.width}/>
    </div>
  )
};

export default Book;