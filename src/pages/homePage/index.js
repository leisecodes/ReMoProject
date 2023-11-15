import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Greeting from "./Greeting";
import NavBar from "../../components/navBar";
import Goals from './Goals';
import MyBooks from './MyBooks';
import BookBanner from "./BookBanner";

function HomePage(){
    return(
        <div>
        <Greeting />
        <BookBanner />
        
        <Goals />
        </div>
        
    );
}

export default HomePage;