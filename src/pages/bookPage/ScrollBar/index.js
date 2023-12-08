import React from "react";
import ScrollBar from './ScrollBar';
import ScrollBar2 from './ScrollBar2';
import ScrollBar3 from './ScrollBar3';
import Message from './Message';
import Message2 from './Message2';
import Message3 from './Message3';



function ScrollBarMain() {
    return (
        <div>
            
            {/* Render first set of Message and ScrollBar components */}
            <Message />
            <ScrollBar />
           
            {/* Render second set of Message and ScrollBar components */}
            <Message2 />
            <ScrollBar2 />

            {/* Render third set of Message and ScrollBar components */}
            <Message3 />
            <ScrollBar3 />

            {/* Bottom Separator container w/ bottom-most line*/}
            <div className="separator-container">
                <div className="separator-style-5"></div>
            </div>
        </div>
    )
}

export default ScrollBarMain;