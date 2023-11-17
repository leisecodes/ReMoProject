import React from "react";
import ScrollBar from './ScrollBar';
import ScrollBar2 from './ScrollBar2';
import Message from './Message';
import Message2 from './Message2';
import Message3 from './Message3';



function ScrollBarMain() {
    return (
        <div>
            
            <Message />
            <ScrollBar />
           
            <Message2 />
            <ScrollBar2 />
            <Message3 />
        </div>
    )
}

export default ScrollBarMain;