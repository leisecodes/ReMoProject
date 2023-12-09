// Importing axios for making HTTP requests
import axios from 'axios';


// API endpoint for students
const STUDENTS_API = 'http://localhost:5000/api/students';


// Function to create a new student
export const createStudent = async (student) => {
    const response = await axios.post(STUDENTS_API, student);
    return response.data;
}

// Function to fetch all students
export const findStudents = async () => {
    const response = await axios.get(STUDENTS_API);
    const students = response.data;
    return students;
}

//To be implemented
export const findStudentByID = async (sid) => {}

// Function to delete a student by ID
export const deleteStudent = async (sid)=> {
    const response = await axios.delete(`${STUDENTS_API}/${sid}`);
    return response.data;
}

// Function to update a student
export const updateStudent = async (student) => {
    const response = await axios.put(`${STUDENTS_API}/${student._id}`, student);
    return student;
}