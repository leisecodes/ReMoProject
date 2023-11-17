import { createSlice } from "@reduxjs/toolkit";

import { findStudentsThunk, deleteStudentThunk, createStudentThunk, updateStudentThunk } from "../services/students-thunks";

const initialState = {
    students: [],
    loading: false
}

const studentsSlice = createSlice({
    name: 'students',
    extraReducers: {
        [findStudentsThunk.pending]:
            (state) => {
                state.loading = true
                state.students = []
            },
        [findStudentsThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.students = payload
            },
        [findStudentsThunk.rejected]:
            (state, action) => {
                state.loading = false
                state.error = action.error
            },
        [deleteStudentThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.students = state.students.filter(s => s._id !== payload)
            },
        [createStudentThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.students.push(payload)
            },
        [updateStudentThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                const studentIndex = state.students.findIndex((s)=> s._id === payload._id)
                state.students[studentIndex] = {...state.students[studentIndex], ...payload }
            }
    },

    reducers: { }

});