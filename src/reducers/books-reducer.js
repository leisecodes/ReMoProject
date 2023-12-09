// Importing createSlice function from Redux Toolkit
import { createSlice } from "@reduxjs/toolkit";
// Importing thunk action creators for books from books-thunks file
import { updateBookThunk, createBookThunk, deleteBookThunk, findBooksThunk, findOneBookThunk } from "../services/books-thunks.js";
// Initial state for the books slice
const initialState = { 
    books: [],
    book: [],
    loading: false
}

// Creating a slice for handling books state and actions
const booksSlice = createSlice({
    name: "books",
    initialState,
    extraReducers:{
        // Reducers responding to the outcomes of different thunk actions
        [updateBookThunk.fulfilled]:  // Fulfilled action for updating a book
        (state, { payload })=> {
            state.loading = false;
            const bookIndex = state.books.findIndex((b) => b.bookID === payload.bookID)
            state.books[bookIndex] = {...state.books[bookIndex], ...payload}
        },
        [createBookThunk.fulfilled]: // Fulfilled action for creating a book
        (state, { payload }) => {
            state.loading = false;
            state.books.push(payload)
        },
        [deleteBookThunk.fulfilled] : // Fulfilled action for deleting a book
        (state, { payload }) => {
            state.loading = false
            state.books = state.books.filter(b=>b._id !== payload)
        },
        [findOneBookThunk.fulfilled]: // Fulfilled action for finding a single book
        (state, {payload}) => {
            state.loading = false
            state.book = payload;
        },
        
        [findBooksThunk.pending]: // Pending action for finding books
            (state) => {
                state.loading = true
                state.books = []
            },
        [findBooksThunk.fulfilled]: // Fulfilled action for finding books
            (state, { payload }) => {
                state.loading = false
                state.books = payload
            },
        [findBooksThunk.rejected]: // Rejected action for finding books
        (state, action) => {
            state.loading = false
            state.error = action.error
        }
    },

    reducers: {}
});

// Exporting the books slice with reducers and initial state
export default booksSlice.reducer;