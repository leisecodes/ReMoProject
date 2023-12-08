import React from "react";

function Message (props) {
    return (
        <div>

            {/* Separator containers (double lines) */}
            <div className="separator-container">
                <div className="separator-style-3"></div>
            </div>
            <div className="separator-container">
                <div className="separator-style-4"></div>
            </div>

            {/* Message section */}
            <div class="row text-center">
                <h1 class="message-3">To Be Read Books (My TBR)</h1>
            </div>
           
        </div>
    );
};

export default Message;