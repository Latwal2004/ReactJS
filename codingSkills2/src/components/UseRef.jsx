// import React, { useRef } from 'react'

// const UseRefHook = () => {
//     const inputRef = useRef(null)
//     function handleFocus(){
//         console.log(inputRef)
//         inputRef.current.focus();
//         inputRef.current.style.color="red"
//         inputRef.current.placeholder="I am Focused using useRef"
//     }
//     function handleToggle(){
//         if(inputRef.current.style.display!= 'none'){
//             inputRef.current.style.display = 'none'
//         }
//         else{
//             inputRef.current.style.display = 'inline'
//         }
//     }
//   return (
//     <div>
//         <h1>Implementing UseRef Hooks</h1>
//          <button onClick={handleToggle}>Toggle</button>
//         <input type="text"  ref={inputRef}/>
//         <button onClick={handleFocus}>Click on me to Focus on input Box</button>
       
//     </div>
//   )
// }

// export default UseRefHook



import React, { useRef } from 'react'
import { useState } from 'react'

const UseRefHook = () => {
    console.log("Component Rendered");
    const [count,setCount] = useState(0);
    
    const countRef = useRef(null)


    function updateRef(){
            countRef.current += 1;
            console.log("Ref Value:", countRef.current);
    }

  return (
    <div>
        <h1>Ques.Why Changing the current value using the UseRef Don't Re-Render the Component</h1>

        <div>
            <h3>UseRef Value : {countRef.current}</h3>
            <h3>Count Value  : {count}</h3>
            <button style={{margin:"5px",padding:"5px",borderRadius:"6px"}} onClick={() => updateRef()}>Update UseRef</button>
            <button style={{margin:"5px",padding:"5px",borderRadius:"6px"}} onClick={() => setCount(count + 1)}>Update Count</button>

        </div>
    </div>
  )
}

export default UseRefHook