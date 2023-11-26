import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import PracticeBook from "./practiceBook.js";
import { findInputsThunk } from "../../services/inputs-thunks.js";
import { Navigate } from "react-router";
import { useState } from "react";
import PracticeFilteredBookList from "./practiceFilteredBookList.js";
import PracticeInput from "./practiceInput.js";

const PracticeInputList = () => {
    const { inputs, loading } = useSelector((state)=> state.inputs);
   
    const dispatch = useDispatch();
    useEffect(()=> {
        dispatch(findInputsThunk())
    }, [])

    return (
      <div>
        <ul className="list-group">
        { loading &&
      <li className="list-group-item">
        Loading...
      </li>
    }

    {
      inputs.map(input =>
        
        <PracticeInput 
          key={input._id} input={input}  /> )
    }
  </ul>
  </div>
    );
};

export default PracticeInputList;