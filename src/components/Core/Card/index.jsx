import React from 'react'

const Card =({shadow}) =>{
    console.log("shadow-->", shadow);
    return (
        <div className={`card ${shadow ? "shadow" : ""}`}>
            
        </div>
    )
};

export default Card;
