// Importing the Mongoose library for schema creation
import mongoose from "mongoose";

// Defining a schema for inputs using the Mongoose Schema constructor
const inputsSchema = new mongoose.Schema({
    inputID: Number,
    studentID: Number,
    bookID: Number,
    dateStarted: Date,
    dateCompleted: Date,
    markRead: Boolean,
    rank: Number,
    shelved: Boolean,
    emoji: String,
    favorite: Boolean,
    NoteToSelf: String,
    review: String,
    vote: Boolean,
    TBR: Boolean
}, {collection: 'userInput'});
// Exporting the inputsSchema to be used for creating models
export default inputsSchema;