import React from 'react';
import '../book_RB.css';

function BaseShade () {

    const containerColors = {
        position: 'fixed',
        bottom: 0,
        width: '100%',
        height: '30px', // Set the desired height
        backgroundColor: '#00B2A9',
      };
    
    return (
        <div style={containerColors}>
          <div className="bottom-line1-RB"></div>
          <div className="bottom-line2-RB"></div>
        </div>
      );
    



}
export default BaseShade;