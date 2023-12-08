import React, { useState }  from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import 'bootstrap/dist/css/bootstrap.css';
import Greeting from "./Greeting";
import NavBar from "../../components/navBar";
import Goals from './Goals';
import MyBooks from './MyBooks';
import BookBanner from "./BookBanner";
import Login from "../loginScreen/login";


function HomePage(){

        // Selecting currentUser from Redux store
        const { currentUser } = useSelector((state)=>state.user);

        // State to manage profile and initialize it with currentUser
        const [profile, setProfile] = useState(currentUser);

        // Hook to enable navigation
        const navigate = useNavigate();

    return(
        
        <div>
        {/* Conditionally rendering components based on profile existence */}
        {!profile &&
        <div>
        {/* Greeting and BookBanner displayed for non-logged-in user */}
        <Greeting user="default"/>
        <BookBanner/>
        </div>
        }

        {profile && 
        <div>
        {/* Greeting, BookBanner, and Goals displayed for logged-in user */}
        <Greeting user={profile}/>
        <BookBanner />
        <Goals user={profile} />
        </div>
        }
        
        
        </div>
        
    );
}

export default HomePage;