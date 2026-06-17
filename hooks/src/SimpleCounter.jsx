import { useState } from "react"
export const SimpleCounter = () => {

    // console.log("Simple Counter component rendered")
    const [count, SetCount] = useState(0);
    console.log("Render phase : Component rendering with count  = ", count);

    const handleClick = () => {
        console.log("Before setCount , count is : ", count)
        SetCount(count + 1);//count = 0
        SetCount(count + 5);//count = 0
        SetCount(count + 6);//count = 0
        SetCount(count + 10);//count = 0 
        SetCount(count + 7);//count = 0 this wins as (7)last wins

        // console.log("After  setCount , count is : ", count)
        console.log("Still in trigger phase. After setCount, count is : ", count);
    };

    return (
        <div>
            <h2>Count : {count}</h2>
            {/* <button onClick={() => SetCount(count + 1)}>Increment</button> */}
            <button onClick={handleClick}>Increment</button>
        </div>
    )

}

