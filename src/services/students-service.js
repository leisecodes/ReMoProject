import axios from 'axios';

const STUDENTS_API = 'http://localhost:5000/api/students';

export const createStudent = async (student) => {}
export const findAllStudents = async () => {
    const response = await axios.get(STUDENTS_API);
    const students = response.data;
    return students;
}

export const findStudentByID = async (student) => {}
export const deleteStudent = async (student)=> {}
export const updateStudent = async (student) => {}