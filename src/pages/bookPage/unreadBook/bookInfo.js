import React from 'react';
import culturedDonut from "../../../images/culturedDonut.webp";
import Tags from './tags';


function BookInfo() {

    const containerStyle = {
        display: 'flex',
        alignItems: 'center',
    };

    const imageStyle = {
        width: '400px', 
        height: '350px', 
        margin: '30px 30px',
    };
    
    
    const bookInfoStyle = {
        border: '1px solid #000', 
        width: '575px',
        height: '390px',
        padding: '20px', // Padding within the box
        marginLeft: '15px', // Margin to separate the image and the box
        borderRadius: '20px', // Adjust the value to control the roundness
    };

 
    return (
        <div className="bookInfoContainer" style={containerStyle}>
            
            <div className="coverImage">
                <img src={culturedDonut} alt="Book Cover" style={imageStyle} />
            </div>
            <div style={bookInfoStyle}>
                {/* Book information here */}
                <h2 style={{ marginBottom: '4px' }}> Title: </h2>
                <p style={{ marginBottom: '2px' }}>Author: </p>
                <p style={{ marginBottom: '2px' }}>Illustrator: </p>
                <p style={{ marginBottom: '2px' }}>Copyright Date: </p>
                <p style={{ marginBottom: '2px' }}>Genre: </p>
                <p style={{ marginBottom: '2px' }}>Page Count: </p>
                <p style={{ marginBottom: '2px' }}>Summary: </p>

                {/* Tag reference here */}
                <Tags />
            </div>
    </div>
   
    );

}
export default BookInfo;