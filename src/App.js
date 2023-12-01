import logo from './logo.svg';
import './App.css';
import HomePage from './pages/homePage';
import NavBar from './components/navBar';
import Login from './pages/loginScreen/login.js';
import PracticePage from './pages/practicePage/practicePage.js';
import BooksList from './pages/practicePage/practiceBookList.js';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import ProfilePage from './pages/profilePage';
import BookPage from './pages/bookPage';
import BookDetail from './pages/bookDetail'
import BookInfo from './pages/bookInfo'
import PracticeBookDetails from './pages/practicePage/practiceBookDetails.js';
import studentReducer from "./reducers/students-reducer.js";
import booksReducer from "./reducers/books-reducer.js"
import inputsReducer from './reducers/inputs-reducer.js';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import authReducer from './reducers/auth-reducer.js';
import UnreadBook from './pages/bookInfo/unreadBook/index.js';
import PracticeInputList from './pages/practicePage/practiceInputList.js';
import ReadBook from './pages/bookDetail/readBook/index.js';

const store = configureStore(
  {reducer: {user: authReducer, books: booksReducer, book: booksReducer, inputs: inputsReducer}}
);
function App() {
  return (
    <Provider store= {store}>
    <Router>
        <NavBar />
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

export default App;
