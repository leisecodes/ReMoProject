import React from 'react';
import culturedDonut from "../../../images/culturedDonut.webp";
import Tags from './tags';
import '../book_UB.css';


function BookInfo() {

    const containerStyle = {
        display: 'flex',
        alignItems: 'center',
    };

    return (
        <div className="bookInfoContainer-UB" style={containerStyle}>
            <div className="coverImage-UB">
                <img src={culturedDonut} alt="Book Cover" />
            </div>
            <div className="bookInfoStyle-UB"> {/* Use the class name from bookInfo.css */}
                {/* Book information here */}
                <h2 style={{ marginBottom: '4px' }}> Title: </h2>
                <p style={{ marginBottom: '2px' }}>Author: </p>
                <p style={{ marginBottom: '2px' }}>Illustrator: </p>
                <p style={{ marginBottom: '2px' }}>Copyright Date: </p>
                <p style={{ marginBottom: '2px' }}>Genre: </p>
                <p style={{ marginBottom: '2px' }}>Page Count: </p>
                <p style={{ marginBottom: '2px' }}>Summary: </p>

                <div className="info-separator-style-UB">

                </div>

                {/* Tag reference here */}
                <Tags />
            </div>
        </div>
    );

}
export default BookInfo;