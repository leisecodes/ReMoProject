import logo from './logo.svg';
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
import studentReducer from "./reducers/students-reducer.js";
import booksReducer from "./reducers/books-reducer.js"
import authReducer from './reducers/auth-reducer.js';
import inputsReducer from './reducers/inputs-reducer.js';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

const store = configureStore(
  {reducer: {user: authReducer}}
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

        </Routes>
    </Router>
    </Provider>
    
  );
}

export default App;
