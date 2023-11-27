import React, { useRef, useEffect } from "react";
import "./styles.css";
import goalImg from "../../../images/goal.jpg";
import { Outlet, Link, } from "react-router-dom";
import {BookValues} from "../../BookValues"
import { useDispatch, useSelector } from "react-redux";
import BookTemplate from "../bookTemplate.js";
import { findBooksThunk } from "../../../services/books-thunks.js";
import "./styles.css";

export default function ScrollBar() {
  const sliderRef = useRef(null);
  const scrollAmount = 100;

  const { books, loading } = useSelector((state)=> state.books);
   
  const dispatch = useDispatch();
  useEffect(()=> {
      dispatch(findBooksThunk())
  }, [])



  return (
    <div className="ScrollBar">
      <button
        className="nav-btn"
        onClick={() => {
          const container = sliderRef.current;
          container.scrollLeft -= scrollAmount;
        }}
      >
      </button>
      <div className="images-container" ref={sliderRef}>
        {books.map(book =>
        
        <BookTemplate 
          key={book._id} book={book} className="image" /> ) }
      </div>
      <button
        className="nav-btn"
        onClick={() => {
          const container = sliderRef.current;
          container.scrollLeft += scrollAmount;
        }}
      >
      </button>
    </div>
  );
}