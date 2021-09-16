import {useEffect, useState} from 'react';

const useDimensions = () => {
    const [width, setWidth] = useState("");
    const [height, setHeight] = useState("");
    useEffect(()=>{
        
        const handleResize = () => {
            setWidth(window.innerWidth);
            setHeight(window.innerHeight);
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    },[]);

    return { width, height};
}

export default useDimensions
