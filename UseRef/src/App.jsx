
// import { useRef, useState,useEffect } from 'react'
// import './App.css'

// function App() {
//   const[count,setCount] = useState(0);

//   let val= useRef(0);
//   let btnRef = useRef(null);

//   function handleClick(){
//     val.current = val.current + 1;
//     console.log("value of val is:", val.current);
//     setCount(count => count + 1);
//   }
//   function changeColor(){
//     btnRef.current.style.backgroundColor = 'red';
//     btnRef.current.style.borderRadius = '10px';
//   }
//     useEffect(() => {
//     console.log("main ferse render hogya hu");
//   },[count]);
//   return (
//     <div>
//       <br/>
//       <button 
//       onClick={changeColor}>
//         click on Me i will Change the Color of Increment Button
//       </button>

//       <br />
//       <br />
//       <button 
//        ref={btnRef}
//       onClick={handleClick}>
//         Increment
//       </button>
//       <br />
//       <div>
//         count:{count}
//       </div>
//     </div>
//   )
// }
// export default App

import { useRef, useState,useEffect } from 'react'
import './App.css'

function App() {
  const[time,setTime] = useState(0) 
  let timeRef = useRef(null);

  function startTimer(){
    timeRef.current = setInterval(() =>{
      setTime(time => time +1)//prev=> prev + 1
    },1000)
  }
  function stopTimer(){
    clearInterval(timeRef.current);
    timeRef.current = null;
  }
  function resetTimer(){
    stopTimer();
    setTime(0);
  }
  return (
      <div>
        <h1>Stopwatch: {time} seconds</h1>
        
        <button onClick={startTimer}>Start</button>
        <br />
        <br />
        <button onClick={stopTimer}>Stop</button>
        <br />
        <br />
        <button onClick={resetTimer}>Reset</button>
      </div>

    )
}
export default App
