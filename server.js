// Importing necessary modules
import express from "express";
import "dotenv/config";
import session from "express-session";
import cors from 'cors';
import mongoose from "mongoose";

// Importing various controllers for handling routes
import studentController from "./controllers/student-controller.js";
import bookController from "./controllers/books-controller.js";
import inputController from "./controllers/inputsController.js";
import AuthController from "./students/auth-controller.js";

// MongoDB connection URI
const uri = "mongodb+srv://leise:temp@clustersg.ravhtu6.mongodb.net/?retryWrites=true&w=majority";

// Initializing the Express application
const app = express();


// Connecting to MongoDB using Mongoose
mongoose.connect(uri, {dbName:'msbaDB'});

// Setting the port for the server
const port = process.env.PORT || 5000;

// Enabling CORS with specific origins and credentials
app.use(cors({
  credentials: true,
  origin: ["http://localhost:3000", "https://preeminent-sunburst-86e559.netlify.app"],
}));

// Setting session options for Express session
const sessionOptions = {
  secret: "any string",
  resave: false,
  saveUninitialized: false,
};

// Adjusting session settings based on environment
if (process.env.NODE_ENV !== "development"){
  sessionOptions.proxy = true;
  sessionOptions.cookie = {
    sameSite:"none",
    secure: true,
  };
}

// Using Express session and enabling JSON body parsing
app.use(session(sessionOptions));
app.use(express.json());

// Setting up various controllers to handle routes
studentController(app);
bookController(app);
inputController(app);
AuthController(app);

// Starting the server to listen on the defined port
app.listen(port);

console.log(`Server is running on port: ${port}`);
