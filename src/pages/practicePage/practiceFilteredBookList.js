import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import PracticeBook from "./practiceBook.js";
import { findBooksThunk } from "../../services/books-thunks.js";
import { Navigate } from "react-router";
import { useState } from "react";

const PracticeFilteredBookList = () => {
    const { books, loading } = useSelector((state)=> state.books);
   
    const dispatch = useDispatch();
    useEffect(()=> {
        dispatch(findBooksThunk())
    }, [])

    return (
        <ul className="list-group">
        { loading &&
      <li className="list-group-item">
        Loading...
      </li>
    }

    {
      books.map(book =>
        
        <PracticeBook 
          key={book._id} book={book}  /> )
    }
  </ul>

    );
};

export default PracticeFilteredBookList;