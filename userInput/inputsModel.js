import mongoose from 'mongoose';
import inputsSchema from './inputsSchema.js';
const inputsModel = mongoose.model('userInput', inputsSchema, 'userInput');
export default inputsModel;