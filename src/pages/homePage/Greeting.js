import React from "react";
import user from "../profilePage/profile.json";

function Greeting (props) {
    return (
        <div>
        <h1>Welcome, {user.preferredName}!</h1>
        <h2>You have read {user.readCount} books.</h2>
        </div>
    );
};

export default Greeting;