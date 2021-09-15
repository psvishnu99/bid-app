import React from 'react';
import small from "../../assets/images/hamburger/drawable-hdpi/hamburger.png";
import medium from "../../assets/images/hamburger/drawable-mdpi/hamburger.png";
import large from "../../assets/images/hamburger/drawable-xhdpi/hamburger.png";
// import large from "../../assets/images/hamburger/drawable-ldpi/hamburger.png";


const Hamburger = () => {
    return (
        <img srcSet={`${small} 486w,${medium} 768w,${large} 1280w`} height="36px" alt="" />        
    )
}

export default Hamburger;
