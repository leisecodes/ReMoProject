import React from "react";
import user from "../profilePage/profile.json";

function Greeting (props) {
    return (
        <div class = "ms-0 greeting-container">
            <h1>Welcome, {user.preferredName}!</h1>

            <h3>You have read{" "}
                <span className="read-count">{user.readCount}</span> books.
            </h3>
        </div>
    );
};

export default Greeting;