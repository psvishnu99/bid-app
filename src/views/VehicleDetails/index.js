import React, { useState } from 'react';
import VehicleDetailsCard from '../../components/VehicleDetailsCard';
import Heading from '../../components/Core/Heading';
import Card from '../../components/Core/Card';
import Button from '../../components/Core/Button';
import Currency from '../../components/Core/Currency';
import InputTextField from '../../components/Core/InputTextField';

const VechicleDetails = () => {
    const [currency,setCurrency] = useState("");
    const [name, setName] =useState("");
    const [phoneNumber, setPhoneNumber] =useState("");

    


    const handleCurrencyChange= (e) => {
        console.log("e--", e)
       if(e.target.value) {
           setCurrency(e.target.value)
       }
       else {
           setCurrency("")
       }
    }

    const handlePhoneNumber = (e) => {
     setPhoneNumber(e.target.value)
    }

    const handleName = (e) => {
        setName(e.target.value)
    }

    const allowBid = (phoneNumber.length && name.length) <=0 ? true : false;


    return (
            <div className="container">
                <Heading title="Old Car Available" className="text-center" />
                <VehicleDetailsCard />
                <Card>
                    <Heading title="Place Your Bid" className="sm text-center" />
                    <div className="currencyWrapper fieldWrapper"><Currency handleChange={(e)=>handleCurrencyChange(e)} /></div>
                    <div class="priceContainer fieldWrapper">
                        <input type="radio" id="priceFixed" name="skills" disabled={!currency ? true : false } value="Fixed Price" />
                        <label for="priceFixed">Fixed Price</label>
                        <input type="radio" id="priceNegotiable" name="skills" disabled={!currency ? true : false } value="Price Negotiable" />
                        <label for="priceNegotiable">Rate Negotiatable </label>
                    </div>

                    
                   <div className="textFieldWrapper">
                    <InputTextField name="Enter your mobile number*" pattern="^\d{10}$" handleChange={(e)=>handlePhoneNumber(e)}/>
                    </div>
                    <div className="textFieldWrapper">
                    <InputTextField name="Enter your name*" handleChange={(e)=>handleName(e)}/>
                    </div>
                    <div className="textFieldWrapper ">
                    <InputTextField name="Enter Remarks (optional)"/>
                    </div>





                </Card>

                <Button name="Bid Now" disabled={allowBid} />


            </div>
    )
}

export default VechicleDetails;
