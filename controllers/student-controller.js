// Importing the StudentsDao module which contains database operations related to students
import * as StudentsDao from "../students/studentsDao.js";

// Controller for handling student-related routes
const studentController = (app) => {
    // Route to fetch all students or a student by credentials
    app.get('/api/students', findAllStudents);
    // Route to find a student by their ID
    app.get('/api/students/:uid', findStudentByID);
    // Route to create a new student
    app.post('/api/students', createStudent);
    // Route to delete a student by their ID
    app.delete('/api/students/:uid', deleteStudent);
    // Route to update a student by their ID
    app.put('/api/students/:uid', updateStudent);
}

// Function to find all students or a student by credentials
const findAllStudents = async (req, res) => {
    const username = req.query.username;
    const password = req.query.password;
    // If username and password are provided, attempt to find student by credentials
    if (username && password) {
        const student = await StudentsDao.findStudentByCredentials(username, password);
        if (student) {
            res.json(student);
        }
        else {
            res.sendStatus(404); // Send 404 status if student not found
        }
    }
    else{ // If no username and password provided, fetch all students
        const students = await StudentsDao.findStudents();
        res.json(students);
        }
    };

// Function to find a student by their ID
const findStudentByID = async (req, res) => {
    const userId = req.params.uid;
    const user = await StudentsDao.findStudentByID(userId);
    res.json(user);
}

// Function to create a new student
const createStudent = async (req, res) => {
    const newStudent = req.body;
    const insertedStudent = await StudentsDao.createStudent(newStudent);
    res.json(insertedStudent);
}

// Function to delete a student by their ID
const deleteStudent = async (req, res) => {
    const userId = req.params.uid;
    const status = await StudentsDao.deleteStudent(userId);
    res.json(status);
}

// Function to update a student by their ID with new data
const updateStudent = async (req, res) => {
    const userId = req.params.uid;
    const updates = req.body;
    const status = await StudentsDao.updateStudent(userId, updates);
    res.json(status);
}

// Exporting the studentController to be used in other parts of the application
export default studentController;