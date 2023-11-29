import React from 'react';
import Separator from './separator';
import { Outlet, Link, } from "react-router-dom";
import '../book_UB.css';

function PgHeader () {
    
    return (
        <div>
          <Separator />
          <div className="header-container-UB">
            
                <Link to = {'/books'} class="text-decoration-none">
                <div className="back-button-UB">
                    <div className="arrow-UB">&#8592;</div>
                    </div>
                </Link>
            
            <div className="book-details-UB">
              <h1 className='book-details-label-UB'>Book Details</h1>
              <span className="book-details-UB span">(Unread Book)</span>
            </div>
          </div>
        </div>
      );
}
export default PgHeader;