import React, {useEffect} from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from 'react-redux';
import { findBooksThunk } from "../../../services/books-thunks";
import { findInputsThunk } from "../../../services/inputs-thunks";
import PgHeader from "./pgHeader";
import BookInfo from "./bookInfo";
import BaseShade from "./baseShade";

const ReadBook = () => {
    const { id } = useParams();
    const { books, loading } = useSelector((state)=> state.books);
    const { inputs, loadInputs } = useSelector((state)=>state.inputs);
   
    const dispatch = useDispatch();
    useEffect(()=> {
        dispatch(findBooksThunk(), findInputsThunk())
    }, [])
    
    return (
        <div>
            <PgHeader/>  
            {books && (
                <div>
                {books.filter((book)=>book.bookID===Number(id)).map(book=>
                    <BookInfo key={book._id} book={book} input={inputs.filter((input)=>(input.bookID===Number(id)) && (input.studentID===2))}/>)}    
                </div>
            )}                   
            <BaseShade/>
        </div>
    )
}

export default ReadBook;