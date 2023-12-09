import React, { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./styles.css";
import goalImg from "../../../images/goal.jpg";
import { Outlet, Link, } from "react-router-dom";
import {BookValues} from "../../BookValues"
import BookTemplate from "../bookTemplate";
import { findBooksThunk } from "../../../services/books-thunks";

export default function ScrollBar() {
  const sliderRef = useRef(null);
  const scrollAmount = 100;
  // Retrieve books and loading state from the Redux store
  const { books, loading } = useSelector((state)=> state.books);
   // Access the Redux dispatch function
  const dispatch = useDispatch();
  // Fetch books when the component mounts
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
      {/* Container for displaying book images */}
      <div className="images-container" ref={sliderRef}>
      {/* Map through books to display BookTemplate */}
      {books.map(book =>
        
        <BookTemplate 
          key={book._id} book={book} className="image" /> ) }
      </div>
      {/* Button to scroll right */}
      <button
        className="nav-btn"
        onClick={() => {
        // Access the container reference and scroll right
          const container = sliderRef.current;
          container.scrollLeft += scrollAmount;
        }}
      >
      </button>
    </div>
  );
}