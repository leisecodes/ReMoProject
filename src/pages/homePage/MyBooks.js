import React from 'react';
import Book from './Book';
function MyBooks (props) {
    return (
        <div>
        
        {/* Heading for the My Books section */}
        <h1>My Books</h1>

        {/* Heading for the Read Books section */}
        <h2>Read Books</h2>

        {/* Component for displaying the books that have been read */}
        <Book />

        {/* Heading for the Unread Books section */}
        <h2>Unread Books</h2>
        </div>
    );
};

export default MyBooks;