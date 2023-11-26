import BooksModel from "./books-model.js";

export const findBooks = () => BooksModel.find();
export const createBook = (book) =>  BooksModel.create(book);
export const deleteBook = (bookId) => BooksModel.deleteOne({_id: bookId});
export const updateBook = (bookId, book) => BooksModel.updateOne({_id: bookId}, {$set: book});
export const findBookById = (bookId) => BooksModel.findOne({bookID: bookId});
