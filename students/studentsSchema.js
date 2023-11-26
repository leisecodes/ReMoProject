import { ObjectId } from "mongodb";
import mongoose from "mongoose";

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

export default studentsSchema;