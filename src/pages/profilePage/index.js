import React from "react";
import Details from "./details";
import BadgeContainer from "./badgeContainer";

function ProfilePage() {
    return(
        <div class="container">


                <div className="separator-container">
                    <div className="separator-style-p1"></div>
                </div>

            <div class="row">

                <h1 class="profile-label">My Profile</h1>

                <div className="separator-container">
                    <div className="separator-style-p2"></div>
                </div>

                <div className="profile-container">
                    <div class="col-6 mb-3">
                        <Details/>
                    </div>

                    <div class= "col-6 mb-3">
                        <BadgeContainer/>
                    </div>
                </div>

                
            </div>

      

        </div>
    );
};

export default ProfilePage;
