import React from 'react';
import small from "../../../assets/images/Profile/drawable-hdpi/Profile.png";
import medium from "../../../assets/images/Profile/drawable-mdpi/Profile.png";
import large from "../../../assets/images/Profile/drawable-xhdpi/Profile.png";

const ProfileCard = ({name,location}) => {
    return (
        <div className="profile-card">
             <img srcSet={`${small} 486w,${medium} 768w,${large} 1280w`} height="36px" alt="" /> 
             <div className="profile-details">
                 <span className="profile-name">{name}</span>
                 <span className="profile-location">{location}</span>
             </div>
        </div>
    )
}

export default ProfileCard;
