import React from 'react';
import Book from './Book';
function MyBooks (props) {
    return (
        <div>
        <h1>My Books</h1>
        <h2>Read Books</h2>
        <Book />
        <h2>Unread Books</h2>
        </div>
    );
};

export default MyBooks;