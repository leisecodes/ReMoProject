
// Importing the studentsModel module which represents the model/schema for students in the database
import studentsModel from "./studentsModel.js";


// Function to find all students
export const findStudents = () => studentsModel.find();
// Function to find a student by their username and password (credentials)
export const findStudentByCredentials = (username, password) => studentsModel.findOne({'login.username': username, 'login.password': password});
// Function to find a student by their ID
export const findStudentByID = (sid) => studentsModel.findOne({studentID: sid});
// Function to create a new student
export const createStudent = (student) => studentsModel.create(student);
// Function to delete a student by their ID
export const deleteStudent = (sid) => studentsModel.deleteOne({_id: sid});
// Function to update a student by their ID with new data
export const updateStudent = (sid, student) => studentsModel.updateOne({_id: sid}, {$set: student});
