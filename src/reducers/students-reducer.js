// Importing createSlice function from Redux Toolkit
import { createSlice } from "@reduxjs/toolkit";
// Importing thunk action creators for students from students-thunks file
import { findStudentsThunk, deleteStudentThunk, createStudentThunk, updateStudentThunk } from "../services/students-thunks";

// Initial state for the students slice
const initialState = {
    students: [],
    loading: false
}

// Creating a slice for handling students state and actions
const studentsSlice = createSlice({
    name: 'students',
    initialState,
    extraReducers: {
        // Reducers responding to the outcomes of different thunk actions
        [findStudentsThunk.pending]: // Pending action for finding students
            (state) => {
                state.loading = true
                state.students = []
            },
        [findStudentsThunk.fulfilled]: // Fulfilled action for finding students

            (state, { payload }) => {
                state.loading = false
                state.students = payload
            },
        [findStudentsThunk.rejected]: // Rejected action for finding students
            (state, action) => {
                state.loading = false
                state.error = action.error
            },
        [deleteStudentThunk.fulfilled]: // Fulfilled action for deleting a student
            (state, { payload }) => {
                state.loading = false
                state.students = state.students.filter(s => s._id !== payload)
            },
        [createStudentThunk.fulfilled]: // Fulfilled action for creating a student
            (state, { payload }) => {
                state.loading = false
                state.students.push(payload)
            },
        [updateStudentThunk.fulfilled]: // Fulfilled action for updating a student
            (state, { payload }) => {
                state.loading = false
                const studentIndex = state.students.findIndex((s)=> s._id === payload._id)
                state.students[studentIndex] = {...state.students[studentIndex], ...payload }
            }
    },

    reducers: { } 

});