import React from 'react';
import '../book.css';

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
          <div className="yellow-line"></div>
          <div className="green-line"></div>
        </div>
      );
    



}
export default BaseShade;