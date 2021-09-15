import React from 'react';
import xsmall from "../../assets/images/HondoLogo/drawable-ldpi/Hondo_Logo.png";
import small from "../../assets/images/HondoLogo/drawable-mdpi/Hondo_Logo.png";
import medium from "../../assets/images/HondoLogo/drawable-hdpi/Hondo_Logo.png";
import large from "../../assets/images/HondoLogo/drawable-xhdpi/Hondo_Logo.png";

const Logo = () => {
    return (
        <img srcSet={`${xsmall} 300w,${small} 486w,${medium} 768w,${large} 1280w`} height="67px" alt="" />
    )
}

export default Logo
