// Importing the Mongoose library for MongoDB interactions
import mongoose from 'mongoose';

// Importing the BooksSchema defining the structure of a book
import BooksSchema from './books-schema.js';

// Creating a Mongoose model named 'Book' using the BooksSchema for the 'books' collection
const BooksModel = mongoose.model('Book', BooksSchema, 'books');

// Exporting the BooksModel to be used in other parts of the application
export default BooksModel;