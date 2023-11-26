import React from 'react';
import Separator from './separator';
import { Outlet, Link, } from "react-router-dom";
import '../book_RB.css';

function PgHeader () {
    
    return (
        <div>
          <Separator />
          <div className="header-container-RB">
            <div className="back-button-RB">
                <Link to = {'/books'}>
                    <div className="arrow-RB">&#8592;</div>
                </Link>
            </div>
            <div className="book-details-RB">
              <h1 className="book-details-label-RB">Book Details</h1>
              <span className="book-details-RB span">(Read Book)</span>
            </div>
          </div>
        </div>
      );
}
export default PgHeader;