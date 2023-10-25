import logo from './logo.svg';
import './App.css';
import HomePage from './pages/homePage/index';
import NavBar from './components/navBar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import ProfilePage from './pages/profilePage';

function App() {
  return (
    <Router>
        <NavBar />
        <Routes>
          <Route path="/" element= {<HomePage/>}/>
          <Route path="/profile" element= {<ProfilePage/>}/>
        </Routes>
    </Router>
   
    
  );
}

export default App;
