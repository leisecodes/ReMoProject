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
        const { currentUser } = useSelector((state)=>state.user);
        const [profile, setProfile] = useState(currentUser);
        const navigate = useNavigate();

    return(
        
        <div>
        {!profile &&
        <div>
        <Greeting user="default"/>
        <BookBanner/>
        </div>
        }

        {profile && 
        <div>
        <Greeting user={profile}/>
        <BookBanner />
        <Goals user={profile} />
        </div>
        }
        
        
        </div>
        
    );
}

export default HomePage;