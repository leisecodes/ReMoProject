import axios from 'axios';

const STUDENTS_API = 'http://localhost:5000/api/students';

export const createStudent = async (student) => {
    const response = await axios.post(STUDENTS_API, student);
    return response.data;
}


export const findStudents = async () => {
    const response = await axios.get(STUDENTS_API);
    const students = response.data;
    return students;
}

export const findStudentByID = async (sid) => {}


export const deleteStudent = async (sid)=> {
    const response = await axios.delete(`${STUDENTS_API}/${sid}`);
    return response.data;
}

export const updateStudent = async (student) => {
    const response = await axios.put(`${STUDENTS_API}/${student._id}`, student);
    return student;
}