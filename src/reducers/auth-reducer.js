// Importing createSlice function from Redux Toolkit
import { createSlice } from "@reduxjs/toolkit";

// Importing thunk action creators for authentication from auth-thunks file
import { loginThunk, logoutThunk, profileThunk, updateUserThunk } from "../services/auth-thunks.js";

// Creating a slice for handling authentication state and actions
const authSlice = createSlice({
    name: "auth",
    initialState: { currentUser: null },
    reducers: {},
    extraReducers: {
    // Reducers responding to the outcomes of different thunk actions
        // Fulfilled action for user login
        [loginThunk.fulfilled]: (state, { payload }) => {
            state.currentUser = payload; // Set current user to the logged-in user    
         },
         // Fulfilled action for user logout
        [logoutThunk.fulfilled]: (state) => {
            state.currentUser = null;
        },
        // Fulfilled action for fetching user profile
        [profileThunk.fulfilled]: (state, { payload }) => {
            state.currentUser = payload;
        },
        // Rejected action for fetching user profile
        [profileThunk.rejected]: (state, { payload }) => {
            state.currentUser = null;
        },
        // Pending action for fetching user profile
        [profileThunk.pending]: (state, action) => {
            state.currentUser = null;
        },
        // Fulfilled action for updating user information
        [updateUserThunk.fulfilled]: (state, { payload }) => {
            state.currentUser = payload;
        },
    },
});


// Exporting the auth slice with reducers and initial state
export default authSlice.reducer;