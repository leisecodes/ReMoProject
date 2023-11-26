import React from "react";
import BooksButton from "./booksButton";
import HomeButton from "./homeButton";
import VoteButton from "./voteButton";
import ProfileIcon from "./profileIcon";
import logo from '../../images/msbalogo.jpg';
import { BsPersonCircle } from "react-icons/bs";
import {
    Outlet,
    Link,
} from "react-router-dom";
import "./navBarStyles.css";



function NavBar(){
    return (
        <nav class="navbar navbar-expand-lg">
            <a class="navbar-brand ms-3" href="/">
                <img src={logo} alt='Maine Student Book Award' width="135" height="107"/>
                <span className="brand-label">Maine Student Book Award</span>
            </a>
        <div class="navbar-nav me-auto mb-2 mb-lg-0">
            <Link to='/' class='text-decoration-none'>
                <button className="navBar-home-btn">Home</button>
            </Link>
            <Link to='/books' class='text-decoration-none'>
                <button className="navBar-books-btn">Books</button>
            </Link>
            <Link to='/vote' class='text-decoration-none'>
                <button className="navBar-vote-btn">Vote</button>
            </Link>
            <Link to='/profile'>
                <button className="navBar-profile-btn"> <BsPersonCircle size={50}/></button>
            </Link> 
        </div>
        </nav>       
        
    );
}
export default NavBar;