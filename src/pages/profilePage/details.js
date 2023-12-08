import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { profileThunk, logoutThunk, updateUserThunk } from "../../services/auth-thunks";
import profileImg from "../../images/profileimg.jpg";
import user from "./profile.json";
import schoolIcon from "../../images/schoolImg3.png";
import gradeIcon from "../../images/gradeImg.png";
import birthdayIcon from "../../images/bdayImg.png";
import { parse } from 'date-fns';
import "./profilePg.css";


function Details () {

    // Extracting current user details from Redux store
    const { currentUser } = useSelector((state)=>state.user);
    //const currentUser = user;

    // State to manage the user profile data
    const [profile, setProfile] = useState(currentUser);

    // Access to Redux dispatch function
    const dispatch = useDispatch();

     // Navigation function from React Router
    const navigate = useNavigate();

    // Function to save updated user profile data
    const save = () => {
        dispatch(updateUserThunk(profile));
    };

    // Fetching user profile data from the server when the component mounts
    useEffect(() => {
        async function fetchData() {
            const {payload} = await dispatch(profileThunk());
            console.log(payload);
            setProfile(payload);
        }

        fetchData()
    }, []);

    // BirthDate function w/ formatting
    const BirthDate = (date) => {
    const shortDate = date.toString().slice(0,10);    
    return <p>{shortDate}</p>;
    };


        return(
            <div>

            {/* Display profile information if profile data exists */}
            {profile && (
            <div className="profile-info-container"><div>
            <div class= "profilePhoto row justify-content-start align-items-end">
                
                {/* Profile photo section */}
                <div class="col-2">
                <img src={profile.imageLink} alt="student profile" class = "studentImg rounded-circle border border-dark" width="100px" height="100px" />
                </div>
                <div class=" col-auto ms-4">
                    <div class="row">
                    <input type="file" />
                    </div>
                </div>    
                </div>
            </div>  

            {/* Separator */}
            <div className="separator-container">
                <div className="separator-style-p3"></div>
            </div>


            {/* Profile details */}
            <div class = "row mt-4">
                <div className="col">
                    {/* Labels for profile details */}
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

                    {/* Profile detail values */}
                    <p className="profile-field-fName" >{profile.firstName} {profile.lastName}
                    </p>
                
                    <p className="profile-field-pName">{profile.preferredName}</p>
                    <p className="profile-field-pronoun">{profile.pronouns}</p>
                    <p className="profile-field-school">{profile.schoolName}</p>
                    <p className="profile-field-grade">{profile.grade}</p>
                    <p className="profile-field-birthday">{BirthDate(profile.birthday)}</p>
                </div> 
            </div>



            {/* Separator */}
            <div className="separator-container">
                <div className="separator-style-p4"></div>
            </div>

            {/* Edit and color change buttons */}
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
        
            )}

</div>
        )};
        
            
        
            


export default Details;