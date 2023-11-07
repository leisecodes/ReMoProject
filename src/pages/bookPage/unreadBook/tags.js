import React from 'react';
import '../book.css';


function Tags() {
  
    return (
        <div>
          <div className="tags">
            <h5>Tags:</h5>
            <button className="tag-button tag-color-1">Tag</button>
            <button className="tag-button tag-color-2">Tag</button>
            <button className="tag-button tag-color-3">Tag</button>
            <button className="tag-button tag-color-4">Tag</button>
          </div>
          <div style={{ display: 'flex' }}>
            <button className="lg-button" style={{ backgroundColor: '#0fbac6' }}>
              Mark As Read
            </button>
            <button className="lg-button" style={{ backgroundColor: '#052489' }}>
              Add to TBR
            </button>
          </div>
        </div>
      );
    }

export default Tags;
