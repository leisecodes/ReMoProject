import React from 'react';
import '../book_UB.css';


function Tags() {
  
    return (
        <div>
          <div className="tags-UB">
            <h5>Tags:</h5>
            <button className="tag-button-UB tag-color-1-UB">Tag</button>
            <button className="tag-button-UB tag-color-2-UB">Tag</button>
            <button className="tag-button-UB tag-color-3-UB">Tag</button>
            <button className="tag-button-UB tag-color-4-UB">Tag</button>
          </div>
          <div style={{ display: 'flex' }}>
            <button className="lg-button-UB" style={{ backgroundColor: '#0fbac6' }}>
              Mark As Read
            </button>
            <button className="lg-button-UB" style={{ backgroundColor: '#052489' }}>
              Add to TBR
            </button>
          </div>
        </div>
      );
    }

export default Tags;
