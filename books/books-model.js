import mongoose from 'mongoose';
import BooksSchema from './books-schema.js';

const BooksModel = mongoose.model('Book', BooksSchema, 'books');

export default BooksModel;