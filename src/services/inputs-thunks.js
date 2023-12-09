// Importing createAsyncThunk function from Redux Toolkit
import { createAsyncThunk } from "@reduxjs/toolkit";
// Importing service functions for inputs from the inputs-service module
import * as inputsService from "./inputs-service.js";

// Thunk action creator to find inputs asynchronously
export const findInputsThunk = createAsyncThunk(
    "inputs/findInputs",
    async () => await inputsService.findInputs()
);

// Thunk action creator to delete an input asynchronously
export const deleteInputThunk = createAsyncThunk(
    'inputs/deleteInput',
    async (iid) => {
        await inputsService.deleteInput(iid)
        return iid;
    }
);


// Thunk action creator to create a new input asynchronously
export const createInputThunk = createAsyncThunk (
    'inputs/createInput',
    async (input) => {
        const newInput = await inputsService.createInput(input)
        return newInput;
    }
);

// Thunk action creator to update an input asynchronously
export const updateInputThunk = createAsyncThunk(
    'inputs/updateInput',
    async (input) =>
    await inputsService.updateInput(input)
)
