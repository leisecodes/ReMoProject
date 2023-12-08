import React from 'react';
import Separator from './separator';
import { Outlet, Link, } from "react-router-dom";
import '../book_RB.css';

{/* Header holding separator lines, labels for Book Details and Read Book
and the back button */}
function PgHeader () {
    
    return (
        <div>
          <Separator />
          <div className="header-container-RB">

                {/* Back button with link to navigate back to '/books' */}
                <Link to = {'/books'} class="text-decoration-none">
                <div className="back-button-RB">
                <div className="arrow-RB">&#8592;</div>
                </div>
                </Link>
            
            {/* Section displaying page labels */}
            <div className="book-details-RB">
              <h1 className="book-details-label-RB">Book Details</h1>
              <span className="book-details-RB span">(Read Book)</span>
            </div>
          </div>
        </div>
      );
}
export default PgHeader;