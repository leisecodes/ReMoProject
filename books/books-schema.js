// Importing the Mongoose library for schema creation
import mongoose from 'mongoose';

// Defining a schema for books using the Mongoose Schema constructor
const BooksSchema = mongoose.Schema({
    bookID: Number,
    title: String,
    author: String,
    illustrator: String,
    genre: Array,
    summary: String,
    pageCount: Number,
    excerpt: String,
    bookTrailerLink: String,
    themes: Array,
    awards: Array,
    copyrightDate: String,
    form: String,
    cover: String
}, {collection: 'books'}); // Specifying the collection name as 'books'
// Exporting the BooksSchema to be used for creating models
export default BooksSchema;