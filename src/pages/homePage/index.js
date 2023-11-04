import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Greeting from "./Greeting";
import NavBar from "../../components/navBar";
import Goals from './Goals';
import MyBooks from './MyBooks';
import ScrollBar from './ScrollBar'

function HomePage(){
    return(
        <div>
        <Greeting />
        <Goals />
        <ScrollBar />
        </div>
        
    );
}

export default HomePage;