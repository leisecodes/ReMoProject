import React from 'react';

function BaseShade () {

    const containerStyle = {
        position: 'fixed',
        bottom: 0,
        width: '100%',
      };
    
      const greenLineStyle = {
        height: '25px',
        backgroundColor: '#00B2A9',
      };
    
      const yellowLineStyle = {
        height: '5px', // Adjust the thickness of the yellow line
        backgroundColor: '#FFFAA0',
      };
    
      return (
        <div style={containerStyle}>
          <div style={yellowLineStyle}></div>
          <div style={greenLineStyle}></div>
          
        </div>
      );



}
export default BaseShade;