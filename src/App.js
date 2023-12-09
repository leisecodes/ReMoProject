// Importing necessary CSS and components
import './App.css';
import HomePage from './pages/homePage';
import NavBar from './components/navBar';
import Login from './pages/loginScreen/login.js';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import ProfilePage from './pages/profilePage';
import BookPage from './pages/bookPage';
import BookDetail from './pages/bookDetail'
import BookInfo from './pages/bookInfo'
// Importing reducers and necessary Redux functionalities
import booksReducer from "./reducers/books-reducer.js"
import inputsReducer from './reducers/inputs-reducer.js';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import authReducer from './reducers/auth-reducer.js';
import UnreadBook from './pages/bookInfo/unreadBook/index.js';
import ReadBook from './pages/bookDetail/readBook/index.js';

// Configuring the Redux store with combined reducers
const store = configureStore(
  // Defining reducers for the store
  {reducer: {user: authReducer, books: booksReducer, book: booksReducer, inputs: inputsReducer}}
);
// Main App component
function App() {
  return (
    // Providing Redux store to the entire app using Provider
    <Provider store= {store}>
      {/* Setting up routing for different pages using React Router */}
    <Router>
      {/* Including navigation bar component */}
        <NavBar />
        {/* Defining routes for different pages */}
        <Routes>
          <Route path="/" element= {<HomePage/>}/>
          <Route path="/profile" element= {<ProfilePage/>}/>
          <Route path="/books" element= {<BookPage/>}/>
          <Route path="/books/detail" element= {<BookDetail/>}/>
          <Route path="/books/info" element= {<BookInfo/>}/>
          <Route path="/login" element = {<Login/>}/>
          <Route path ="bookdetails/read/:id" element= {<ReadBook/>}/>
          <Route path= "/bookdetails/:id" element = {<UnreadBook/>}/>

        </Routes>
    </Router>
    </Provider>
    
  );
}
// Exporting the main App component
export default App;
