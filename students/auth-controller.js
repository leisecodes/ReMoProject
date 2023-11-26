import * as studentsDao from "./studentsDao.js"

const AuthController = (app) => {
    const login = async (req, res) => {
        const username = req.body.username;
        const password = req.body.password;

        if (username && password) {
            const student = await studentsDao.findStudentByCredentials(username, password);
            if (student) {
                req.session["currentUser"] = student;
                res.json(student);
            }
            else{
                res.sendStatus(403);
            }
        }
        else {
            res.sendStatus(403);
        }
    };


    const profile = (req, res) => {
        const currentUser = req.session["currentUser"];
        if (!currentUser) {
            res.sendStatus(404);
            return;
        }
        res.json(currentUser);
    };


    const logout = async (req, res) => {
        req.session.destroy();
        res.sendStatus(200);
    };

    const update = async (req, res) => {
        const id = req.params.sid;
        const newUser = await studentsDao.updateStudent(id, req.body.user);
        req.session["currentUser"] = newUser;
        res.json(newUser);
    };

    app.post("/api/students/login", login);
    app.post("/api/students/profile", profile);
    app.post("/api/students/logout", logout);
    app.put("api/students/update/:sid", update);
};
export default AuthController;