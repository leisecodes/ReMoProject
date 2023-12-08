import React from 'react';
import '../book_UB.css';

function BaseShade () {

    // Style for the base shade container
    const container = {
        position: 'fixed',
        bottom: 0,
        width: '100%',
        height: '30px', 
        backgroundColor: '#00B2A9',
      };
    
    return (
        // Container holding bottom lines
        <div style={container}>
          <div className="bottom-line1-UB"></div>
          <div className="bottom-line2-UB"></div>
        </div>
      );
    



}
export default BaseShade;