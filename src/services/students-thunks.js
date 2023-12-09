// Importing createAsyncThunk function from Redux Toolkit
import { createAsyncThunk } from "@reduxjs/toolkit";
// Importing service functions for students from the students-service module
import * as service from "./students-service";


// Thunk action creator to find students asynchronously
export const findStudentsThunk = createAsyncThunk(
    "students/findStudents",
    async() => await service.findStudents()
);

// Thunk action creator to delete a student asynchronously
export const deleteStudentThunk = createAsyncThunk(
    'students/deleteStudent',
    async (studentId) => {
        await service.deleteStudent(studentId);
        return studentId;
    }
);

// Thunk action creator to create a new student asynchronously
export const createStudentThunk = createAsyncThunk(
    'students/createStudent',
    async (student) => {
        const newStudent = await service.createStudent(student);
        return newStudent;
    }
);

// Thunk action creator to update a student asynchronously

export const updateStudentThunk = createAsyncThunk(
    'students/updateStudent',
    async (student) => await service.updateStudent(student)
);