// Importing the studentsDao module which contains database operations related to students
import * as studentsDao from "./studentsDao.js"

// Controller for handling authentication and user profile-related routes
const AuthController = (app) => {

    // Function to handle user login
    const login = async (req, res) => {
        const username = req.body.username;
        const password = req.body.password;

        if (username && password) {
            // Attempt to find a student by provided credentials
            const student = await studentsDao.findStudentByCredentials(username, password);
            if (student) {
                // If student found, set the current user in the session and respond with user data
                req.session["currentUser"] = student;
                res.json(student);
            }
            else{
                res.sendStatus(403); // Send forbidden status if credentials are incorrect
            }
        }
        else {
            res.sendStatus(403); // Send forbidden status if username or password is missing
        }
    };

    // Function to retrieve user profile information
    const profile = (req, res) => {
        const currentUser = req.session["currentUser"];
        if (!currentUser) {
            res.sendStatus(404);  // If no user in session, send not found status
            return;
        }
        res.json(currentUser); // Send user profile data
    };

    // Function to handle user logout by destroying the session
    const logout = async (req, res) => {
        req.session.destroy();
        res.sendStatus(200);
    };

    // Function to update user information
    const update = async (req, res) => {
        const id = req.params.sid;
        const newUser = await studentsDao.updateStudent(id, req.body.user);
        req.session["currentUser"] = newUser;
        res.json(newUser);
    };
    // Defining routes for different authentication and user profile operations
    app.post("/api/students/login", login);
    app.post("/api/students/profile", profile);
    app.post("/api/students/logout", logout);
    app.put("api/students/update/:sid", update);
};
// Exporting the AuthController to be used in other parts of the application
export default AuthController;