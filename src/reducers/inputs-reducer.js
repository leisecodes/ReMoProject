import { createSlice } from "@reduxjs/toolkit";
import { createInputThunk, deleteInputThunk, updateInputThunk, findInputsThunk } from "../services/inputs-thunks";

const initialState = { 
    inputs: [],
    loading: false
}

const inputsSlice = createSlice({
    name: "inputs",
    initialState,
    extraReducers:{
        [updateInputThunk.fulfilled]:
        (state, { payload })=> {
            state.loading = false;
            const inputIndex = state.inputs.findIndex((i) => i.inputID === payload.inputID)
            state.inputs[inputIndex] = {...state.inputs[inputIndex], ...payload}
        },
        [createInputThunk.fulfilled]:
        (state, { payload }) => {
            state.loading = false;
            state.inputs.push(payload)
        },

        [deleteInputThunk.fulfilled] : 
        (state, { payload }) => {
            state.loading = false
            state.inputs = state.inputs.filter(i=>i._id !== payload)
        },
        
        [findInputsThunk.pending]:
            (state) => {
                state.loading = true
                state.inputs = []
            },
        [findInputsThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.inputs = payload
            },
        [findInputsThunk.rejected]:
        (state, action) => {
            state.loading = false
            state.error = action.error
        }
    },

    reducers: {}
});

export default inputsSlice.reducer;