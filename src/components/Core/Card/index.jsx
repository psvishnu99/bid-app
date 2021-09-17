import React from 'react'
import useDimensions from '../../customHooks/useDimensions';

const Card =({shadow, children}) =>{
    const dimension = useDimensions();
    const width = (dimension.width/100) * 90;
    const margin = (dimension.height/100) * 5;
    return (
        <div className={`card ${shadow ? "shadow" : ""}`} style={{width:width, marginTop:margin,marginBottom:margin}} >
            {children}            
        </div>
    )
};

export default Card;
