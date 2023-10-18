import React from "react";
import BooksButton from "./booksButton";
import HomeButton from "./homeButton";
import VoteButton from "./voteButton";
import ProfileIcon from "./profileIcon";
import logo from '../../images/msbalogo.jpg';

function NavBar(){
    return (
        <nav class="navbar navbar-expand-lg">
            <a class="navbar-brand ms-3" href="#">
                <img src={logo} alt='Maine Student Book Award' width="127" height="99"/>
                Maine Student Book Award
            </a>
        <form class ="form-inline">
            <button class="btn btn-outline-primary ms-4 "> <HomeButton/> </button>
            <button class="btn btn-outline-primary ms-4 "> <BooksButton/> </button>
            <button class="btn btn-outline-primary ms-4 "> <VoteButton/> </button>
            <button class="btn btn-outline-none ms-5"> <ProfileIcon/> </button>
        </form>
        </nav>       
        
    );
}
export default NavBar;