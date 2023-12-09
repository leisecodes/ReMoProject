// Importing the Mongoose library for schema creation
import mongoose from "mongoose";
// Defining a schema for students using the Mongoose Schema constructor
const studentsSchema = new mongoose.Schema({
    studentID: Number,
    firstName: String,
    lastName: String,
    preferredName: String,
    pronouns: String,
    login: {
        username: { type: String }, 
        password: { type: String }
    },
    grade: Number,
    ethnicity: String,
    schoolName: String,
    libraryName: String,
    goals: {
        voteGoal: { type: Number },
        challengeGoal: { type: Number },
        starGoal: { type: Number },
        personalGoal: { type: Number },
    },
    readCount: Number,
    birthday: Date,
    imageLink: String,
    voteCount: Number,
    backgroundColor: Number,
    studentAccessLevel: {
        libraryAccessLevel: { type: String },
        schoolAccessLevel: { type: String },
    }
    
}, {collection: 'students'});

// Exporting the studentsSchema to be used for creating models
export default studentsSchema;