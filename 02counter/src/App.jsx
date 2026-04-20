import { useState } from 'react'
import './App.css'
function App() {


  // useState it returns the array [currVariable, aFunc]
 const [counter,setCounter] = useState(0)
  // let counter = 15;
  const addValue = () =>{
    // counter +=1;
    if(counter >= 20) return alert('Opps Maximum limit Reached....')
    setCounter(counter + 1)
  }
const removeValue = () =>{

  if(counter <= 0) return alert('oops cant decrease more  !!!!')
  setCounter(counter - 1);
   console.log("remove clicked",counter);
}
  return (
    <>
    <h1>React JS Hooks</h1>
    <h2>Counter Value : {counter}</h2>
    <button className='addBtn'
    onClick={addValue}
    >Add Value:{counter}</button>
    <br></br>
    <button className='removeBtn'
    onClick={removeValue}
    >Decrease Value:{counter}</button>
    <footer><p>footer: {counter}</p></footer>
    </>
  )
}

export default App
