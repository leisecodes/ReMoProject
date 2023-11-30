import express from "express";
import "dotenv/config";
import session from "express-session";
import cors from 'cors';
import mongoose from "mongoose";
import studentController from "./controllers/student-controller.js";
import bookController from "./controllers/books-controller.js";
import inputController from "./controllers/inputsController.js";
import AuthController from "./students/auth-controller.js";


const uri = "mongodb+srv://leise:temp@clustersg.ravhtu6.mongodb.net/?retryWrites=true&w=majority";
const app = express();
mongoose.connect(uri, {dbName:'msbaDB'});

const port = process.env.PORT || 5000;
app.use(cors({
  credentials: true,
  origin: ["http://localhost:3000", "https://preeminent-sunburst-86e559.netlify.app"],
}));
const sessionOptions = {
  secret: "any string",
  resave: false,
  saveUninitialized: false,
};
if (process.env.NODE_ENV !== "development"){
  sessionOptions.proxy = true;
  sessionOptions.cookie = {
    sameSite:"none",
    secure: true,
  };
}
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(session(sessionOptions));
app.use(express.json());
studentController(app);
bookController(app);
inputController(app);
AuthController(app);
app.listen(port);

console.log(`Server is running on port: ${port}`);
