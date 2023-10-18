import React from "react";
import BooksButton from "./booksButton";
import HomeButton from "./homeButton";
import VoteButton from "./voteButton";
import ProfileIcon from "./profileIcon";
import logo from '../../images/msbalogo.jpg';

function NavBar(){
    return (
        <nav class="navbar navbar-expand-lg">
            <a class="navbar-brand" href="#">
                <img src={logo} alt='Maine Student Book Award' width="127" height="99"/>
            </a>
        <form class ="form-inline">
            <button class="btn btn-outline-primary"> <HomeButton/> </button>
            <button class="btn btn-outline-primary"> <BooksButton/> </button>
            <button class="btn btn-outline-primary"> <VoteButton/> </button>
            <button class="btn btn-outline-primary"> <ProfileIcon/> </button>
        </form>
        </nav>       
        
    );
}
export default NavBar;