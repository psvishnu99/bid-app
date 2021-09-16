import React from 'react'

const Heading = ({title, className}) => {
    return (
        <>
        <div className={`heading ${className}`}>{title}</div>
        <div className="heading-border"></div>
        </>
    )
}

export default Heading;
