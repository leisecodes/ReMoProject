import React from 'react';


function Tags() {
  const tagsStyle = {
    display: 'flex',
    alignItems: 'center',
    marginTop: '60px', // Adjust the spacing as needed
  };

  const tagButtonStyle = {
    border: 'none',
    borderRadius: '50%',
    width: '60px',
    height: '25px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0 10px', // Adjust the spacing between buttons
    cursor: 'pointer',
    color: 'white',
    fontSize: '13.5px',
  };


  const lgButtonStyle = {
    border: 'none',
    width: '160px', // Adjust the width as needed
    height: '40px', // Adjust the height as needed
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '10px 20px 10px 55px', // Adjust the spacing between buttons
    cursor: 'pointer',
    color: 'white',
    fontWeigth: 'bold',
    fontSize: '16px',
    borderRadius: '20px',
  };


  const tagColors = [
    '#661c78', // Color for the first tag
    '#9e4dab', // Color for the second tag
    '#E35205', // Color for the third tag
    '#ED8B00', // Color for the fourth tag
  ];

  return (
    <div>
        <div style={tagsStyle}>
        <h5>Tags:</h5>
        {tagColors.map((color, index) => (
            <button key={index} style={{ ...tagButtonStyle, backgroundColor: color }}>
            Tag
            </button>
        ))}
        </div>
        <div style={{ display: 'flex' }}>
        <button style={{ ...lgButtonStyle, backgroundColor: '#0fbac6' }}>
          Mark As Read
        </button>
        <button style={{ ...lgButtonStyle, backgroundColor: '#052489' }}>
          Add to TBR
        </button>
      </div>
    </div>



  );
}

export default Tags;
