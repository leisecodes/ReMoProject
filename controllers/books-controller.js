import * as BooksDao from '../books/books-dao.js';

const bookController = (app) => {
    app.get('/api/books', findBooks);
    app.get('/api/books/:bid', findBookById);
    app.post('/api/books', createBook);
    app.delete('/api/books/:bid', deleteBook);
    app.put('/api/books/:bid', updateBook);
}


const findBooks = async (req, res) => {
    const books = await BooksDao.findBooks({});
    res.json(books);
}

const createBook = async (req, res) => {
    const newBook = req.body;
    const insertedBook = await BooksDao.createBook(newBook);
    res.json(insertedBook);
}

const deleteBook = async (req, res)=> {
    const bookIdToDelete = req.params.bid;
    const status = await BooksDao.deleteBook(bookIdToDelete);
    res.json(status);
}

const updateBook = async (req, res) => {
    const bookIdToUpdate = req.params.bid;
    const updates = req.body;
    const status = await BooksDao.updateBook(bookIdToUpdate, updates);
    res.json(status);
}

const findBookById = async (req, res) => {
    const bookIdToFind = req.params.bid;
    const book = await BooksDao.findBookById(bookIdToFind);
    res.json(book);
}

export default bookController;