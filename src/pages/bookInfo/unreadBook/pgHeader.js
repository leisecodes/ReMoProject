import React from 'react';
import Separator from './separator';
import '../book.css';

function PgHeader () {
    
    return (
        <div>
          <Separator />
          <div className="header-container">
            <div className="back-button">
              
              <div className="arrow">&#8592;</div>
            </div>
            <div className="book-details">
              <h1>Book Details</h1>
              <span className="book-details span">(Unread Book)</span>
            </div>
          </div>
        </div>
      );
}
export default PgHeader;