import React from "react";
import Details from "./details";
import BadgeContainer from "./badgeContainer";

function ProfilePage() {
    return(
        <div class="container">

                {/* Separator */}
                <div className="separator-container">
                    <div className="separator-style-p1"></div>
                </div>

            <div class="row">

                {/* Header */}
                <h1 class="profile-label">My Profile</h1>

                {/* Separator */}
                <div className="separator-container">
                    <div className="separator-style-p2"></div>
                </div>

                 {/* Profile container containing user details and badges */}
                <div className="profile-container">
                        <Details/>
                        <BadgeContainer/>
                </div>

                
            </div>

      

        </div>
    );
};

export default ProfilePage;
