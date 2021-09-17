import React from 'react'

const IconList = ({lists}) => {
    return(
        <>
        <div className="list-section">
        {lists.map((list, idx) => {
            return(
            <div className="list" key={idx}>
                <img src={list.icon} alt={list.name} />
                <p>{list.name}</p>
            </div>
        )})}
        </div>
        </>
    )
        
    
}

export default IconList;
