// Importing the Mongoose library for MongoDB interactions
import mongoose from 'mongoose';
// Importing the inputsSchema, defining the structure of an input
import inputsSchema from './inputsSchema.js';
// Creating a Mongoose model named 'userInput' using the inputsSchema for the 'userInput' collection
const inputsModel = mongoose.model('userInput', inputsSchema, 'userInput');
// Exporting the inputsModel to be used in other parts of the application
export default inputsModel;