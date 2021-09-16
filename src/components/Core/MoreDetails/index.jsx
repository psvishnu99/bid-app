import React, { useState } from 'react';

const MoreDetails = ({details, label, icon}) => {
    const [showDetails, setDetails] = useState(false);
    return (
        <>
        {showDetails ? <div className={`details  ${showDetails ? "toggled" : ""}`}>
           {details}
        </div>:""}
        
        <div className={`more-details ${showDetails ? "toggled" : ""}`}>
            
            {label} <img src={icon} alt="" onClick={()=> setDetails(!showDetails)}/>            
        </div>
        </>
    )
}

export default MoreDetails;
