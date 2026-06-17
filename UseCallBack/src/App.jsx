import { useCallback, useState } from 'react'
import './App.css'
import ChildeComponent from './ChildeComponent';

function App() {
  const [count, setCount] = useState(0)

  const handleClick = useCallback(() =>{
    setCount(count=>count + 1);
  },[])
 
//  this will cause function t recreate sgain and again on count chnage beacause on count change the component re-renders
  // function handleClick(){
  //   setCount(count=> count +1);
  // }
  return (
    <div>
      <div>
        Count:{count}
      </div>

      
      <br />
      <div>
        <button onClick={handleClick}>
          Increment
        </button>

        <div>
          <ChildeComponent 
            buttonName = 'click me'
            handleClick = {handleClick}
          /> 
        </div>
      </div>
    </div>
  )
}

export default App
