import React from 'react';

function Separator () {

    const separatorStyle = {
        borderTop: '4.15px solid #00B2A9',
        width: '90%',
        margin: '0cm 1cm 0.25cm 1cm', // Adjust the margin for spacing
        borderRadius: '1rem',
        position: 'relative', // Set the position to relative
      };
    
      const innerSeparatorStyle = {
        borderTop: '1px solid #9e4dab', // Add a very thin yellow line
        width: '99.9%',
        borderRadius: '1rem',
        position: 'absolute', // Position it absolutely within the container
        top: '50%', // Position it at the top of the container
        left: '50%', // Center it horizontally
        transform: 'translateX(-50%)', // Center it horizontally
      };
    
      return (
        <div style={separatorStyle}>
          <div style={innerSeparatorStyle}></div>
        </div>
      );


}
export default Separator;