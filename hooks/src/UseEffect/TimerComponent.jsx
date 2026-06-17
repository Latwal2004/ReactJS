import { useEffect, useState } from "react"

export const TimerCount = ()=>{
    const[seconds,setSecond] = useState(0);

    useEffect(() =>{
        const intervalId = setInterval(() =>{
            console.log("setInterval executed");
            setSecond(prevSeconds =>  prevSeconds + 1);
        },1000);
        
        //🔴 That cleanup runs only in 2 cases:
        // Component unmounts
        // Example:-
        // You navigate to another page
        // You conditionally remove <TimerCount />
        // Effect re-runs (not here)
        // But since your dependency array is [], it runs only once, so this case doesn't happen.
            return() =>{
                    console.log("Time to stop!!!!");
                    clearInterval(intervalId)
                }
            },[]);
    return(
        <div>
            <h1>Seconds : {seconds}</h1>
        </div>
    )

}