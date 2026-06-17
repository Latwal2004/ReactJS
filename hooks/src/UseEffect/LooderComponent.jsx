import { useEffect, useState } from "react"

export const LoggerComponent = ()=>{
    const[count, setCount] = useState(0);

    //runs on every render.
    useEffect(() =>{
        console.log('Component rendered or count changed : ',count);
    });

    return(
        <div>
            <h1>Count : {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    )
}