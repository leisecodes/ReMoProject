import React, {useEffect} from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from 'react-redux';
import { findBooksThunk } from "../../../services/books-thunks";
import { findInputsThunk } from "../../../services/inputs-thunks";
import PgHeader from "./pgHeader";
import BookInfo from "./bookInfo";
import BaseShade from "./baseShade";

const ReadBook = () => {
    // Fetch the 'id' parameter from the URL
    const { id } = useParams();

    // Access books and load status from Redux store
    const { books, loading } = useSelector((state)=> state.books);
    const { inputs, loadInputs } = useSelector((state)=>state.inputs);
   
    const dispatch = useDispatch();

    // Fetch books and inputs using thunks when the component mounts
    useEffect(()=> {
        dispatch(findBooksThunk(), findInputsThunk())
    }, [])
    
    return (
        <div>
            <PgHeader/> 

            {/* Render book information if available */}
            {books && (
                <div>

                {/* Filter books based on 'id' parameter and render BookInfo component */}
                {books.filter((book)=>book.bookID===Number(id)).map(book=>
                    <BookInfo key={book._id} book={book} input={inputs.filter((input)=>((input.bookID===Number(id)) && (input.studentID===2)))}/>)}    
                </div>
            )}                   
            <BaseShade/>
        </div>
    )
}

export default ReadBook;