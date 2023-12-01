import React from "react";
import { useNavigate } from "react-router";

function Greeting (props) {
    const navigate = useNavigate();
    return (
        <div>
        {props.user !== "default" &&
        <div class = "ms-0 greeting-container">
            <h1>Welcome, {props.user.preferredName}!</h1>

            <h3>You have read{" "}
                <span className="read-count">{props.user.readCount}</span> books.
            </h3>
        </div>
        }
        {props.user === "default" &&
        <div class = "ms-0 greeting-container">
            <h1>Welcome!</h1>
            <h3>We can't wait to read with you! Please login to get reading.</h3>
            <div className="login-button-container">
            <button className="btn-primary" onClick={()=>{navigate("/login")}}>Login Here</button>
            </div>
        </div>
        }
        </div>
    );
};

export default Greeting;