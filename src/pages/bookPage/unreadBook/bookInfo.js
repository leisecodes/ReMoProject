import React from 'react';
import culturedDonut from "../../../images/culturedDonut.webp";
import Separator from './separator';


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
        height: '320px',
        padding: '20px', // Padding within the box
        marginLeft: '15px', // Margin to separate the image and the box
    };

 
    return (
        <div className="bookInfoContainer" style={containerStyle}>
            
            <div className="coverImage">
                <img src={culturedDonut} alt="Book Cover" style={imageStyle} />
            </div>
            <div style={bookInfoStyle}>
                {/* Book information here */}
                <h2> Title: </h2>
                <p>Author: </p>
                <p>Illustrator: </p>
                <p>Copyright Date: </p>
                <p>Genre: </p>
                <p>Page Count: </p>
                <p>Summary: </p>
            </div>
    </div>
   
    );

}
export default BookInfo;