import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const PracticeInput = (
    {
    
        input = {
            "_id": 123,
            "inputID": 567,
            "studentID": 890,
            "bookID": 246,
            "dateStarted": "01/01/2001",
            "dateCompleted": "02/02/2002",
            "markRead": false,
            "rank": 1,
            "shelved": true,
            "emoji": "happy",
            "favorite": false,
            "NoteToSelf": "note",
            "review": "review",
            "vote": false,
            "TBR": false,
        }
    }
    
) => {


return (
    <li className="list-group-item">
    <div className="row">
      <div className="col-10">
      <div>
        <p>{input.inputID}</p>
        <p>{input.NoteToSelf}</p>
      </div>
      </div>
    </div>
  </li>
);
};

export default PracticeInput;