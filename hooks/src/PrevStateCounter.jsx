import { useState } from "react"
export const PrevStateCounter = () => {
    // console.log("Simple Counter component rendered")
    const [count, SetCount] = useState(0);
    console.log("Render phase : Component rendering with count  = ", count);

    const handleClick = () => {
        // SetCount(count + 1);
        // console.log("After setCount (count + 1), count is : ", count);
        // SetCount(count + 5);
        // console.log("After setCount (count + 5), count is : ", count);
        // SetCount(count + 10);
        // console.log("After setCount (count + 10), count is : ", count);
      
        SetCount((prev) => {
            console.log("First updater fn : prev count = ",prev)
           return  prev + 1
        })
        console.log("After setCount (prev => prev + 1), count is : ", count);
       
        SetCount((prev) =>{
            console.log("second updater fn : prev count = ",prev)
            return prev + 5
        })
        console.log("After setCount (prev => prev + 5), count is : ", count);
       
        SetCount((prev) => {
         console.log("third updater fn : prev count = ",prev)          
         return prev + 10
        })
        console.log("After setCount (prev => prev + 10), count is : ", count);

    };

    return (
        <div>
            <h2>Count : {count}</h2>
            {/* <button onClick={() => SetCount(count + 1)}>Increment</button> */}
            <button onClick={handleClick}>Increment</button>
        </div>
    )

}