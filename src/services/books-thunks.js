// Importing createAsyncThunk function from Redux Toolkit
import { createAsyncThunk } from "@reduxjs/toolkit";
// Importing service functions for books from the books-service module
import * as booksService from "./books-service.js";

// Thunk action creator to find books asynchronously
export const findBooksThunk = createAsyncThunk(
    "books/findBooks",
    async () => await booksService.findBooks()
);

// Thunk action creator to find a single book asynchronously by ID
export const findOneBookThunk = createAsyncThunk(
    "books/findOneBook",
    async (bid) => {
       const book = await booksService.findOneBook(bid)
       return book;
    }
)

// Thunk action creator to delete a book asynchronously
export const deleteBookThunk = createAsyncThunk(
    'books/deleteBook',
    async (bid) => {
        await booksService.deleteBook(bid)
        return bid;
    }
);

// Thunk action creator to create a new book asynchronously
export const createBookThunk = createAsyncThunk (
    'books/createBook',
    async (book) => {
        const newBook = await booksService.createBook(book)
        return newBook;
    }
);

// Thunk action creator to update a book asynchronously
export const updateBookThunk = createAsyncThunk(
    'books/updateBook',
    async (book) =>
    await booksService.updateBook(book)
)
