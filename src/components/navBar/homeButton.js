import React from "react";
import {Link} from "react-router-dom";

{/* Home button in nav bar */}
function HomeButton() {
    return(
        <div>
        <button class="btn btn-outline-primary"><Link to='/' class=''>Home</Link></button>
        </div>
    );
};

export default HomeButton;