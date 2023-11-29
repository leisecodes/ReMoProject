import React from 'react';
import Separator from './separator';
import { Outlet, Link, } from "react-router-dom";
import '../book_RB.css';

function PgHeader () {
    
    return (
        <div>
          <Separator />
          <div className="header-container-RB">
            <Link to = {'/books'} class="text-decoration-none">
		          <div className="back-button-UB">    
		            <div className="arrow-UB">&#8592;</div>      
		          </div>
		        </Link>

            <div className="book-details-RB">
              <h1 className="book-details-label-RB">Book Details</h1>
              <span className="book-details-RB span">(Read Book)</span>
            </div>
          </div>
        </div>
      );
}
export default PgHeader;