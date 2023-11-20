import React from "react";
import profileImg from "../../images/profileimg.jpg";
import user from "./profile.json";
import "./profilePg.css";


function Details () {
    return(
        <div className="profile-info-container">
            <div class= "profilePhoto row justify-content-start align-items-end">
                <div class="col-2">
                <img src={user.imageLink} alt="student profile" class = "studentImg rounded-circle border border-dark" width="100px" height="100px" />
                </div>
                <div class=" col-auto ms-4">
                    <div class="row">
                    <input type="file" />
                    </div>
                    <button class="btn btn-outline-secondary mt-1" type="button" id="inputGroupFileAddon04" >Save Image</button>
                </div>    
            </div>  

            <div class = "row mt-4">
                <div className="col">
                    <p class="profile-field-label-name">Name: 
                    </p>
                </div>
                    <div className="col-8 profile-field-name">
                    <p >{user.firstName} {user.lastName}
                    </p>
                </div>
                <p>Preferred Name: {user.preferredName}</p>
                <p>Pronouns: {user.pronouns}</p>
                <p>School: {user.schoolName}</p>
                <p>Grade Level: {user.grade}</p>
                <p>Birthday: {user.birthday}</p>
                
            </div>


            <div className="separator-container">
                <div className="separator-style-p3"></div>
            </div>

            <div class = "row align-items-center">
                <div class = "col-3">
                <button class= "btn btn-outline-secondary" type="button" id="editProfileBtn"> Edit Profile </button>
                </div>
                <div class= "col-3">
                    <select class="custom-select custom-select-sm">
                    <option selected>Change Color</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                    </select>
                </div>
            </div>
        </div>
    );
}
export default Details;