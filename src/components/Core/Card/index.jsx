import React from 'react'

const Card =({shadow, children}) =>{
    return (
        <div className={`card ${shadow ? "shadow" : ""}`} >
            {children}            
        </div>
    )
};

export default Card;
