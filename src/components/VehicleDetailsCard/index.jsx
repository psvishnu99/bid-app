import React from 'react'
import IconList from '../Core/IconList';
import payment from "../../assets/icons/payment.svg";
import vehicle from "../../assets/icons/vehicle.svg";
import square from "../../assets/icons/square.svg";
import more from "../../assets/icons/more.svg";
import MoreDetails from '../Core/MoreDetails';
import ProfileCard from '../Core/ProfileCard';
import useDimensions from '../customHooks/useDimensions';
import Card from '../Core/Card';


const iconList = [ 
    {icon: square ,name:"Specification 1"},
    {icon: vehicle,name:"Specification 2"},
    {icon: payment,name:"Specification 3"}
    ];

const CardHeader = ({title, subTitle}) => {
return  <div className="card-header">
          <div className="cardTitle">{title}</div>
          <div className="cardSubTitle">{subTitle}</div>
        </div>

};



const VehicleDetailsCard = () => {
    // const dimension = useDimensions();
    // const width = (dimension.width/100) * 90;
    // const margin = (dimension.height/100) * 5;

    return (
        <Card>
            <CardHeader title="Honda City" subTitle="Posted at 1 Nov,9:30 AM" />
            <IconList lists={iconList} /> 
            <MoreDetails label="More details" icon={more} details="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"/> 
            <ProfileCard name="Rohan Sharma" location="Bengaluru Karnataka"/>       
        </Card>
    )
}

export default VehicleDetailsCard;
