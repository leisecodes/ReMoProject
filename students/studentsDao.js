import studentsModel from "./studentsModel.js";

export const findStudents = () => studentsModel.find();
export const findStudentByCredentials = (username, password) => studentsModel.findOne({'login.username': username, 'login.password': password});
export const findStudentByID = (sid) => studentsModel.findOne({studentID: sid});
export const createStudent = (student) => studentsModel.create(student);
export const deleteStudent = (sid) => studentsModel.deleteOne({_id: sid});
export const updateStudent = (sid, student) => studentsModel.updateOne({_id: sid}, {$set: student});
