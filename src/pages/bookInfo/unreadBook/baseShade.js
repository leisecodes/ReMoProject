import React from 'react';
import '../book_UB.css';

function BaseShade () {

    const container = {
        position: 'fixed',
        bottom: 0,
        width: '100%',
        height: '30px', // Set the desired height
        backgroundColor: '#00B2A9',
      };
    
    return (
        <div style={container}>
          <div className="bottom-line1-UB"></div>
          <div className="bottom-line2-UB"></div>
        </div>
      );
    



}
export default BaseShade;