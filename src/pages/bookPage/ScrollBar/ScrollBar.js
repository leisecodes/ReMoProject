import React, { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReadBookTemplate from "../readBookTemplate.js";
import { findBooksThunk } from "../../../services/books-thunks.js";
import "./styles.css";
import goalImg from "../../../images/goal.jpg";
import { Outlet, Link, } from "react-router-dom";
//import {BookValues} from "../../BookValues"

// This component creates a scrollable bar to display books using a slider

// Define the ScrollBar component
export default function ScrollBar() {
// Define the ScrollBar component
  const sliderRef = useRef(null);
// Define the scroll amount when the navigation buttons are clicked
  const scrollAmount = 100;


  // Retrieve books and loading state from the Redux store
  const { books, loading } = useSelector((state)=> state.books);
   
    // Access the Redux dispatch function
    const dispatch = useDispatch();
    
    // Fetch books when the component mounts
    useEffect(()=> {
        dispatch(findBooksThunk())
    }, [])
// Render the ScrollBar component
  return (
    <div className="ScrollBar">
    {/* Button to scroll left */}
      <button
        className="nav-btn"
        onClick={() => {
        // Access the container reference and scroll left
          const container = sliderRef.current;
          container.scrollLeft -= scrollAmount;
        }}
      >
      </button>
      {/* Container for displaying book images */}
      <div className="images-container" ref={sliderRef}>
        {/* Map through books to display BookTemplate */}
        {books.map(book =>
        
        <ReadBookTemplate 
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