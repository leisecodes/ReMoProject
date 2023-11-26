import mongoose from "mongoose";
import { ObjectId } from "mongodb";
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
export default inputsSchema;