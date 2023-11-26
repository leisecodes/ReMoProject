import React from 'react';
import Separator from './separator';
import '../book.css';
import { Outlet, Link, } from "react-router-dom";

function PgHeader () {
    
    return (
        <div>
          <Separator />
          <div className="header-container">
            <div className="back-button">
              <Link to = {'/books'}>
                <div className="arrow">&#8592;</div>
              </Link>
            </div>
            <div className="book-details">
              <h1>Book Details</h1>
              <span className="book-details span">(Read Book)</span>
            </div>
          </div>
        </div>
      );
}
export default PgHeader;