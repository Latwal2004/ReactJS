import { useEffect } from "react";
import { useState } from "react"

export const ResizeWindow = ()=>{
    const[windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() =>{
        const handleResize = () =>{
            setWindowWidth(window.innerWidth);
        }
            console.log("Event Listener Added");
            window.addEventListener('resize', handleResize);

            return ()=>{
                console.log("Event Listener Added");
                window.removeEventListener('resize',handleResize);
            };
    },[]);


    return(
        <div>
            <h1>Window width : {windowWidth}</h1>
        </div>
    );
}