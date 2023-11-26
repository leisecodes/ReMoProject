
import mongoose from 'mongoose';

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
}, {collection: 'books'});
export default BooksSchema;