import React from "react";
import Details from "./details";
import BadgeContainer from "./badgeContainer";

function ProfilePage() {
    return(
        <div class="container">
            <div class="row">
                <div class="col-6">
                <h1>My Profile</h1>
                    <Details/>
                </div>
                <div class= "col-6">
                    <BadgeContainer/>
                </div>
            </div>
            

        </div>
    );
};

export default ProfilePage;
