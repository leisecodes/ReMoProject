import { createAsyncThunk } from "@reduxjs/toolkit";
import * as inputsService from "./inputs-service.js";

export const findInputsThunk = createAsyncThunk(
    "inputs/findInputs",
    async () => await inputsService.findInputs()
);

export const deleteInputThunk = createAsyncThunk(
    'inputs/deleteInput',
    async (iid) => {
        await inputsService.deleteInput(iid)
        return iid;
    }
);

export const createInputThunk = createAsyncThunk (
    'inputs/createInput',
    async (input) => {
        const newInput = await inputsService.createInput(input)
        return newInput;
    }
);

export const updateInputThunk = createAsyncThunk(
    'inputs/updateInput',
    async (input) =>
    await inputsService.updateInput(input)
)
