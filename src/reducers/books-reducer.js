import { createSlice } from "@reduxjs/toolkit";
import { updateBookThunk, createBookThunk, deleteBookThunk, findBooksThunk, findOneBookThunk } from "../services/books-thunks.js";
const initialState = { 
    books: [],
    book: [],
    loading: false
}

const booksSlice = createSlice({
    name: "books",
    initialState,
    extraReducers:{
        [updateBookThunk.fulfilled]:
        (state, { payload })=> {
            state.loading = false;
            const bookIndex = state.books.findIndex((b) => b.bookID === payload.bookID)
            state.books[bookIndex] = {...state.books[bookIndex], ...payload}
        },
        [createBookThunk.fulfilled]:
        (state, { payload }) => {
            state.loading = false;
            state.books.push(payload)
        },
        [deleteBookThunk.fulfilled] : 
        (state, { payload }) => {
            state.loading = false
            state.books = state.books.filter(b=>b._id !== payload)
        },
        [findOneBookThunk.fulfilled]:
        (state, {payload}) => {
            state.loading = false
            state.book = payload;
        },
        
        [findBooksThunk.pending]:
            (state) => {
                state.loading = true
                state.books = []
            },
        [findBooksThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.books = payload
            },
        [findBooksThunk.rejected]:
        (state, action) => {
            state.loading = false
            state.error = action.error
        }
    },

    reducers: {}
});

export default booksSlice.reducer;