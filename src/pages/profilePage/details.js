import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { profileThunk, logoutThunk, updateUserThunk } from "../../services/auth-thunks";
import profileImg from "../../images/profileimg.jpg";
import user from "./profile.json";
import schoolIcon from "../../images/schoolImg3.png";
import gradeIcon from "../../images/gradeImg.png";
import birthdayIcon from "../../images/bdayImg.png";

import "./profilePg.css";


function Details () {
    //const { currentUser } = useSelector((state)=>state.user);
    const currentUser = user;
    const [ profile, setProfile ] = useState(currentUser);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const save = async () => {await dispatch(updateUserThunk(profile)); };
    useEffect(() => {
        const loadProfile = async () => {
        const { payload } = await dispatch(profileThunk());
        setProfile(payload);
        };
    loadProfile();
    }, []);
        return(
        <div className="profile-info-container">
            <div>
            <div class= "profilePhoto row justify-content-start align-items-end">
                <div class="col-2">
                    <img 
                        src={currentUser.imageLink} 
                        alt="student profile" 
                        class = "profile-image rounded-circle border border-dark"
                    />
                
                <div class="mt-3 row">
                    <div class="col-md-6">
                        <input type="file" class="choose-file-button" />
                    </div>    
                    <div class="col-md-6">
                        <button class="btn save-image-button" type="button" id="inputGroupFileAddon04" >
                            Save Image
                        </button>
                    </div>
                </div>    
                </div>
            </div>  

            <div className="separator-container">
                <div className="separator-style-p3"></div>
            </div>

                
                <div class = "row mt-4">
                <div className="col">
                    <p className="profile-field-label-name">Name:</p>
                    <p className="profile-field-label-pName">Preferred Name:</p>
                    <p className="profile-field-label-pronoun">Pronouns:</p>
                    <p className="profile-field-label-school">
                        <img src={schoolIcon} alt="School Icon" className="profile-text-icon" />
                        School:
                    </p>
                    <p className="profile-field-label-grade">
                        <img src={gradeIcon} alt="Grade Icon" className="profile-text-icon" />
                        Grade Level:
                    </p>
                    <p className="profile-field-label-birthday">
                        <img src={birthdayIcon} alt="Birthday Icon" className="profile-text-icon" />
                        Birthday:
                    </p>
                </div>
                <div className="col-7 profile-field-name">
                    <p className="profile-field-fName">{currentUser.firstName} {currentUser.lastName}</p>
                    <p className="profile-field-pName">{currentUser.preferredName}</p>
                    <p className="profile-field-pronoun">{currentUser.pronouns}</p>
                    <p className="profile-field-school">{currentUser.schoolName}</p>
                    <p className="profile-field-grade">{currentUser.grade}</p>
                    <p className="profile-field-birthday">{currentUser.birthday}</p>
                </div>
                </div>
                </div>


            <div className="separator-container">
                <div className="separator-style-p4"></div>
            </div>

            <div class = "row align-items-center">
                <div class = "col-3">
                <button class= "btn edit-profile-button" type="button" id="editProfileBtn"> Edit Profile </button>
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