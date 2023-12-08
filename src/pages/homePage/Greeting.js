import React from "react";
import { useNavigate } from "react-router";

function Greeting (props) {

    // Hook to enable navigation
    const navigate = useNavigate();
    return (
        <div>
        {/* Conditional rendering based on the user */}
        {props.user !== "default" &&

        // Rendering when user is not the default
        <div class = "ms-0 greeting-container">

             {/* Displaying user's preferred name */}
            <h1>Welcome, {props.user.preferredName}!</h1>

             {/* Displaying the number of books read by the user */}
            <h3>You have read{" "}
                <span className="read-count">{props.user.readCount}</span> books.
            </h3>
        </div>
        }

        {/* Rendering when the user is the default */}
        {props.user === "default" &&
        <div class = "ms-0 greeting-container message-default">
            {/* Greeting for default user */}
            <h1>Welcome!</h1>

            {/* Prompt to log in for reading */}
            <h3>We can't wait to read with you! Please login to get reading.</h3>

            {/* Button to navigate to the login page */}
            <div className="home-login-button-container">
            <button className="home-btn-primary" onClick={()=>{navigate("/login")}}>Login Here</button>
            </div>
        </div>
        }
        </div>
    );
};

export default Greeting;