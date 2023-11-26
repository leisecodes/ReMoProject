import { createAsyncThunk } from "@reduxjs/toolkit";
import * as booksService from "./books-service.js";

export const findBooksThunk = createAsyncThunk(
    "books/findBooks",
    async () => await booksService.findBooks()
);

export const findOneBookThunk = createAsyncThunk(
    "books/findOneBook",
    async (bid) => {
       const book = await booksService.findOneBook(bid)
       return book;
    }
)

export const deleteBookThunk = createAsyncThunk(
    'books/deleteBook',
    async (bid) => {
        await booksService.deleteBook(bid)
        return bid;
    }
);

export const createBookThunk = createAsyncThunk (
    'books/createBook',
    async (book) => {
        const newBook = await booksService.createBook(book)
        return newBook;
    }
);

export const updateBookThunk = createAsyncThunk(
    'books/updateBook',
    async (book) =>
    await booksService.updateBook(book)
)
