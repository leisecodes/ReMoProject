import * as StudentsDao from "../students/studentsDao.js";


const studentController = (app) => {
    app.get('/api/students', findAllStudents);
    app.get('/api/students/:uid', findStudentByID);
    app.post('/api/students', createStudent);
    app.delete('/api/students/:uid', deleteStudent);
    app.put('/api/students/:uid', updateStudent);
}

const findAllStudents = async (req, res) => {
    const username = req.query.username;
    const password = req.query.password;
    if (username && password) {
        const student = await StudentsDao.findStudentByCredentials(username, password);
        if (student) {
            res.json(student);
        }
        else {
            res.sendStatus(404);
        }
    }
    else{ 
        const students = await StudentsDao.findStudents();
        res.json(students);
        }
    };

const findStudentByID = async (req, res) => {
    const userId = req.params.uid;
    const user = await StudentsDao.findStudentByID(userId);
    res.json(user);
}

const createStudent = async (req, res) => {
    const newStudent = req.body;
    const insertedStudent = await StudentsDao.createStudent(newStudent);
    res.json(insertedStudent);
}

const deleteStudent = async (req, res) => {
    const userId = req.params.uid;
    const status = await StudentsDao.deleteStudent(userId);
    res.json(status);
}

const updateStudent = async (req, res) => {
    const userId = req.params.uid;
    const updates = req.body;
    const status = await StudentsDao.updateStudent(userId, updates);
    res.json(status);
}


export default studentController;