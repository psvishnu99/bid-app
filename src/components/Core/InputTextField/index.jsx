import React from 'react'

const InputTextField = ({name, pattern, handleChange}) => {
    return (
        <>
        <div className="textFieldContainer">
        <input className="inputText"  type="text" id={name} placeholder=" " pattern={pattern} onChange={(e)=>handleChange(e)}/>
        <label className="inputLabel" for={name}>{name}</label>
        </div>
        </>
    )
}

export default InputTextField;
