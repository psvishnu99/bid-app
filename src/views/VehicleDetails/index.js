import React from 'react';
import VehicleDetailsCard from '../../components/VehicleDetailsCard';
import Heading from '../../components/Core/Heading';

const VechicleDetails = () => {
    return (
        <div className="container">
            <Heading title="Old Car Available" className="text-center" />
            <VehicleDetailsCard />
        </div>
    )
}

export default VechicleDetails;
