// Importing createSlice function from Redux Toolkit
import { createSlice } from "@reduxjs/toolkit";
// Importing thunk action creators for inputs from inputs-thunks file
import { createInputThunk, deleteInputThunk, updateInputThunk, findInputsThunk } from "../services/inputs-thunks";

// Initial state for the inputs slice
const initialState = { 
    inputs: [],
    loading: false
}

// Creating a slice for handling inputs state and actions
const inputsSlice = createSlice({
    name: "inputs",
    initialState,
    extraReducers:{
        // Reducers responding to the outcomes of different thunk actions
        [updateInputThunk.fulfilled]: // Fulfilled action for updating an input
        (state, { payload })=> {
            state.loading = false;
            const inputIndex = state.inputs.findIndex((i) => i._id === payload._id)
            state.inputs[inputIndex] = { ...state.inputs[inputIndex], ...payload }
        },
        [createInputThunk.fulfilled]: // Fulfilled action for creating an input
        (state, { payload }) => {
            state.loading = false;
            state.inputs.push(payload)
        },

        [deleteInputThunk.fulfilled] : // Fulfilled action for deleting an input
        (state, { payload }) => {
            state.loading = false
            state.inputs = state.inputs.filter(i=>i._id !== payload)
        },
        
        [findInputsThunk.pending]:// Pending action for finding inputs
            (state) => {
                state.loading = true
                state.inputs = []
            },
        [findInputsThunk.fulfilled]: // Fulfilled action for finding inputs
            (state, { payload }) => {
                state.loading = false
                state.inputs = payload
            },
        [findInputsThunk.rejected]: // Rejected action for finding inputs
        (state, action) => {
            state.loading = false
            state.error = action.error
        }
    },

    reducers: {}
});

// Exporting the inputs slice with reducers and initial state
export default inputsSlice.reducer;