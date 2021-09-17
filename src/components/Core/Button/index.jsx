import React from 'react'
import useDimensions from '../../customHooks/useDimensions';

const Button = ({name, handleClick, disabled}) => {
    const dimensions = useDimensions();
    const width= (dimensions.width/100) * 90;
    return (
    <input 
      className={`submitBtn ${disabled ? "disabled" : ""}`} 
      type="button" 
      disabled={disabled}  
      value={name} 
      style={{width:width}} 
      onClick={()=>handleClick()}
    />
    )
}

export default Button;
