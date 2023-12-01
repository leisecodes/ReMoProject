import React from 'react';
import '../book_RB.css';

function BaseShade () {
// Styling object defining the appearance of the container
    const containerColors = {
        position: 'fixed',
        bottom: 0,
        width: '100%',
        height: '30px', // Set the desired height
        backgroundColor: '#00B2A9',
      };
    
      //Returning container
    return (
        <div style={containerColors}>
          <div className="bottom-line1-RB"></div>
          <div className="bottom-line2-RB"></div>
        </div>
      );
    



}
export default BaseShade;