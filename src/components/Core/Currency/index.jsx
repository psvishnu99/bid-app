import React, { useState } from 'react';
import {indianCurrency} from "../../../lib/lib";
import rupeeIcon from "../../../assets/images/indian-rupee.png";

const Currency = ({handleChange}) => {
    const [currency,SetCurrency] =useState("");
    const [width,SetWidth] =useState(28);
    const [active,setActive] = useState(false);


    
    const onInputChange = (e) => {        
        if(e.target.value && e.target.value.length) {
            SetWidth(e.target.value.length * 28)
            setActive(true)
        }
        else {
            SetWidth(28);
            setActive(false)
        }
        
    }
    return (
        <>
        {/* <img src={rupeeIcon} alt="" /> */}
        <input pattern="[0-9]" className={`currency ${active ? "active" : ""}`} type="text" placeholder="0" style={{width:width}}  onChange={(e)=> {
            handleChange(e); onInputChange(e)}} />
        </>
    )
}

export default Currency
