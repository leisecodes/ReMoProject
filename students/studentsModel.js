import mongoose from 'mongoose';
import studentsSchema from './studentsSchema.js';

const studentsModel = mongoose.model('Student', studentsSchema, 'students');
export default studentsModel;