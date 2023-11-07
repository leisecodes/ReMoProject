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
function NavBar(){
    return (
        <nav class="navbar navbar-expand-lg">
            <a class="navbar-brand ms-3" href="#">
                <img src={logo} alt='Maine Student Book Award' width="127" height="99"/>
                Maine Student Book Award
            </a>
        <div class="navbar-nav me-auto mb-2 mb-lg-0">
            <button class="btn btn-outline-primary ms-5 px-4 py-1"><Link to='/' class='text-decoration-none'>Home</Link></button>
            <button class="btn btn-outline-primary ms-5 px-4 py-1"><Link to='/books' class='text-decoration-none'>Books</Link></button>
            <button class="btn btn-outline-primary ms-5 px-4 py-1"><Link to='/vote' class='text-decoration-none'>Vote</Link></button>
            <button class="btn btn-outline-none ms-5"> <Link to='/profile'><BsPersonCircle size={50}/></Link> </button>
        </div>
        </nav>       
        
    );
}
export default NavBar;