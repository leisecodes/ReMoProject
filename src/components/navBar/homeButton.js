import React from "react";
import {Link} from "react-router-dom";
function HomeButton() {
    return(
        <div>
        <button class="btn btn-outline-primary"><Link to='/' class=''>Home</Link></button>
        </div>
    );
};

export default HomeButton;