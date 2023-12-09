import BooksModel from "./books-model.js";

//Function to Find All Books
export const findBooks = () => BooksModel.find();
// Function to create a new book
export const createBook = (book) =>  BooksModel.create(book);
// Function to delete a book by its ID
export const deleteBook = (bookId) => BooksModel.deleteOne({_id: bookId});
// Function to update a book by its ID with new book data
export const updateBook = (bookId, book) => BooksModel.updateOne({_id: bookId}, {$set: book});
// Function to find a book by its ID
export const findBookById = (bookId) => BooksModel.findOne({bookID: bookId});
