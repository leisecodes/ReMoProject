import logo from './logo.svg';
import './App.css';
import HomePage from './pages/homePage';
import NavBar from './components/navBar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import ProfilePage from './pages/profilePage';
import BookPage from './pages/bookPage';
import BookDetail from './pages/bookDetail'

function App() {
  return (
    <Router>
        <NavBar />
        <Routes>
          <Route path="/" element= {<HomePage/>}/>
          <Route path="/profile" element= {<ProfilePage/>}/>
          <Route path="/books" element= {<BookPage/>}/>
          <Route path="/books/detail" element= {<BookDetail/>}/>

        </Routes>
    </Router>
   
    
  );
}

export default App;
