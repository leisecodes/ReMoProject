import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import PracticeBook from "./practiceBook.js";
import { findBooksThunk } from "../../services/books-thunks.js";
import { Navigate } from "react-router";
import { useState } from "react";
import PracticeFilteredBookList from "./practiceFilteredBookList.js";

const BooksList = () => {
    const { books, loading } = useSelector((state)=> state.books);
   
    const dispatch = useDispatch();
    useEffect(()=> {
        dispatch(findBooksThunk())
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
      books.map(book =>
        
        <PracticeBook 
          key={book._id} book={book}  /> )
    }
  </ul>
    <h1>Filtered list</h1>
    <PracticeFilteredBookList/>

  </div>
    );
};

export default BooksList;