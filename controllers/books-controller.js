// Importing the BooksDao module which contains database operations
import * as BooksDao from '../books/books-dao.js';

// Controller for handling book-related routes
const bookController = (app) => {
    // Route to fetch all books
    app.get('/api/books', findBooks);
    // Route to find a book by its ID
    app.get('/api/books/:bid', findBookById);
    // Route to create a new book
    app.post('/api/books', createBook);
    // Route to delete a book by its ID
    app.delete('/api/books/:bid', deleteBook);
    // Route to update a book by its ID
    app.put('/api/books/:bid', updateBook);
}

// Function to find all books
const findBooks = async (req, res) => {
    const books = await BooksDao.findBooks({});
    res.json(books);
}

// Function to create a new book
const createBook = async (req, res) => {
    const newBook = req.body;
    const insertedBook = await BooksDao.createBook(newBook);
    res.json(insertedBook);
}

// Function to delete a book by its ID
const deleteBook = async (req, res)=> {
    const bookIdToDelete = req.params.bid;
    const status = await BooksDao.deleteBook(bookIdToDelete);
    res.json(status);
}

// Function to update a book by its ID with new data
const updateBook = async (req, res) => {
    const bookIdToUpdate = req.params.bid;
    const updates = req.body;
    const status = await BooksDao.updateBook(bookIdToUpdate, updates);
    res.json(status);
}

// Function to find a book by its ID
const findBookById = async (req, res) => {
    const bookIdToFind = req.params.bid;
    const book = await BooksDao.findBookById(bookIdToFind);
    res.json(book);
}

// Exporting the bookController to be used in other parts of the application
export default bookController;