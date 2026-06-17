import React, { useState } from 'react'
import { useEffect } from 'react';

const ClockComponent = ({color}) => {
    const [time, setTime] = useState(0);

    useEffect(() => {
       const timer = setInterval(() => {
          setTime(new Date().toLocaleTimeString());
        }, 1000)
         return () => clearInterval(timer);
    }, [])
    return (
        <div>
            <h1 style={{color:color,backgroundColor:"black",width:"160px",padding:"10px",borderRadius:"5px"}}>{time}</h1>
        </div>
    )
}

export default ClockComponent