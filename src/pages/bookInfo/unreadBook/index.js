import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router';
import { findBooksThunk } from '../../../services/books-thunks';
import { useDispatch, useSelector } from 'react-redux';
import PgHeader from "./pgHeader";
import BookInfo from "./bookInfo";
import BaseShade from "./baseShade";


const UnreadBook = () => {
    // Fetching the 'id' parameter from the URL
    const { id } = useParams();

    // Access books and load status from Redux store
    const { books, loading } = useSelector((state)=> state.books);
   
    const dispatch = useDispatch();
    
    // Fetching books using thunk when the component mounts
    useEffect(()=> {
        dispatch(findBooksThunk())
    }, [])
    
    return (
        <div>
            {/* Page header component */}
            <PgHeader/> 

            {/* Render book information if available */}
            {books && (
                
                
                <div>

                {/* Filter books based on 'id' parameter and render BookInfo component */}
                {books.filter((book)=>book.bookID===Number(id)).map(book=>
                    <BookInfo key={book._id} book={book}/>)}    
                </div>
            )}         

            {/* Base shade component */}  
            <BaseShade/>
        </div>
    )
}

export default UnreadBook;