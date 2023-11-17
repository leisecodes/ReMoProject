import { createAsyncThunk } from "@reduxjs/toolkit";
import * as service from "./students-service";

export const findStudentsThunk = createAsyncThunk(
    "students/findStudents",
    async() => await service.findStudents()
);

export const deleteStudentThunk = createAsyncThunk(
    'students/deleteStudent',
    async (studentId) => {
        await service.deleteStudent(studentId);
        return studentId;
    }
);

export const createStudentThunk = createAsyncThunk(
    'students/createStudent',
    async (student) => {
        const newStudent = await service.createStudent(student);
        return newStudent;
    }
);

export const updateStudentThunk = createAsyncThunk(
    'students/updateStudent',
    async (student) => await service.updateStudent(student)
);