import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router';
import { findBooksThunk } from '../../services/books-thunks';
import { useDispatch, useSelector } from 'react-redux';
import DetailedBook from './detailedBook';

const PracticeBookDetails = () => {
    const { id } = useParams();
    const { books, loading } = useSelector((state)=> state.books);
   
    const dispatch = useDispatch();
    useEffect(()=> {
        dispatch(findBooksThunk())
    }, [])
    

    return(
        <div>
            <h1>Practice Book Details</h1>
            {books && (
                <div>
                {books.filter((book)=>book.bookID===Number(id)).map(book=>
                    <DetailedBook key={book._id} book={book}/>)}    
                </div>
            )}
        </div>
    );
};

export default PracticeBookDetails;