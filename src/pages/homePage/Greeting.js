import React from "react";
import user from "../profilePage/profile.json";

function Greeting (props) {
    return (
        <div class = "ms-4">
        <h1>Welcome, {user.preferredName}!</h1>
        <h2>You have read {user.readCount} books.</h2>
        </div>
    );
};

export default Greeting;