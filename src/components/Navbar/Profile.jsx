import React from 'react';
import xsmall from "../../assets/images/ProfileTop/drawable-hdpi/Profile_Top.png";
import small from "../../assets/images/ProfileTop/drawable-mdpi/Profile_Top.png";
import medium from "../../assets/images/ProfileTop/drawable-xhdpi/Profile_Top.png";
// import large from "../../assets/images/ProfileTop/drawable-ldpi/Profile_Top.png";


function Profile() {
    return (
        <img srcSet={`${xsmall} 300w,${small} 486w,${medium} 768w,${medium} 1280w`} height="30px"  alt="" />        
    )
}

export default Profile;
