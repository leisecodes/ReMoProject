// Importing the Mongoose library for MongoDB interactions
import mongoose from 'mongoose';
// Importing the studentsSchema, defining the structure of a student
import studentsSchema from './studentsSchema.js';
// Creating a Mongoose model named 'Student' using the studentsSchema for the 'students' collection
const studentsModel = mongoose.model('Student', studentsSchema, 'students');

// Exporting the studentsModel to be used in other parts of the application
export default studentsModel;