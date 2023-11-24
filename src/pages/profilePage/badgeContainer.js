import React from "react";
import fantasyBadge from "../../images/unicorn.jpg";
import nonFicBadge from "../../images/scroll-icon.png";
import starBadge from "../../images/starImg3.png";

function BadgeContainer() {
    return(
        <div class=" badge-info-container">
            <div class="row text-center p-3">
                <h3 class="badge-label">My Badges</h3>
            </div>
            <div class="row align-items-center p-4">
                <div class="col">
                <img src={fantasyBadge} alt='Fantasy Reader' className="fantasy-badge"/>
                <p className="fantasy-badge-label">Fantasy Reader</p>
                </div>
                <div class="col">
                <img src={nonFicBadge} alt='Non-Fiction Reader' className="nonFic-badge"/>   
                <p className="nonFic-badge-label">Non-Fiction Reader</p>
                </div>
                <div class="col">
                <img src={starBadge} alt='Star Reader' className="star-badge"/>    
                <p className="star-badge-label">Star Reader</p>
                </div>
            </div>

            {/* Potential for Additional Badges */}
            {/*
            <div class="row align-items-center p-4">
                <div class="col">
                <img src='' alt='badge4'/> 
                </div>
                <div class="col">
                <img src='' alt='badge5'/> 
                </div>
                <div class="col">
                <img src='' alt='badge6'/>     
                </div>
            </div>
            <div class="row align-items-center p-4">
                <div class="col">
                <img src='' alt='badge7'/>
                </div>
                <div class="col">
                <img src='' alt='badge8'/>   
                </div>
                <div class="col">
                <img src='' alt='badge9'/>    
                </div>
            </div>
            */}
        </div>
    )
};

export default BadgeContainer;