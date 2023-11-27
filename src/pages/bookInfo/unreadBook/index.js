import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router';
import { findBooksThunk } from '../../../services/books-thunks';
import { useDispatch, useSelector } from 'react-redux';
import PgHeader from "./pgHeader";
import BookInfo from "./bookInfo";
import BaseShade from "./baseShade";


const UnreadBook = () => {
    const { id } = useParams();
    const { books, loading } = useSelector((state)=> state.books);
   
    const dispatch = useDispatch();
    
    useEffect(()=> {
        dispatch(findBooksThunk())
    }, [])
    
    return (
        <div>
            <PgHeader/> 
            {books && (
                <div>
                {books.filter((book)=>book.bookID===Number(id)).map(book=>
                    <BookInfo key={book._id} book={book}/>)}    
                </div>
            )}           
            <BaseShade/>
        </div>
    )
}

export default UnreadBook;