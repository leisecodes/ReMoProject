// Importing axios for making HTTP requests
import axios from 'axios';
//const API_BASE = 'http://localhost:5000/api'
//const API_BASE = process.env.REACT_APP_API_BASE;
//const BOOKS_API = `${API_BASE}/books`;

// API endpoint for books
const BOOKS_API = 'https://remo-project-server.onrender.com/api/books';

// Function to create a new book
export const createBook = async (book) => {
    const response = await axios.post(BOOKS_API, book);
    return response.data;
}


// Function to fetch all books
export const findBooks = async () => {
    const response = await axios.get(BOOKS_API);
    const books = response.data;
    return books;
}

// Function to fetch a single book by ID
export const findOneBook = async (bid) => {
    const response = await axios.get(`${BOOKS_API}/${bid}`);
    const book = response.data;
    return book;
}

// Function to delete a book by ID
export const deleteBook = async (bid) => {
    const response = await axios.delete(`${BOOKS_API}/${bid}`)
    return response.data;
}

// Function to update a book
export const updateBook = async (book) => {
    const response = await axios.put(`${book._id}`, book);
    return book;
}