import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import ClockComponent from './components/ClockComponent'
import UseEffect from './components/UseEffect'
import UseEffectWithProps from './components/UseEffectWithProps'
import UseRefHook from './components/UseRef'
import ForwardRef from './components/ForwardRef'
function App() {
  const [color, setColor] = useState('green')
  const[count,setCount] =   useState(0);
  const[data,setData] =   useState(0);

  return (
    <>
    <div>
      <select onChange={(event)=> setColor(event.target.value)} >
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="yellow">Yellow</option>
      </select>

     <ClockComponent color={color} />
    </div>
 
    <br />
    {/* <UseEffect/>  */}
    

      {/* UseEffect as Props */}
      
      <div>
        <h1>UseEffect Behaviour on Props Change</h1>
          <UseEffectWithProps count= {count} data={data}/>
        <button onClick={() => setCount(count + 1)}>Count: {count}</button>
        <button onClick={() => setData(data + 1)}>Data: {data}</button>
      
      </div>

  <br />  
    {/* UseRef Hook */}
    <UseRefHook/>


{/* ForwardRef */}
    <div>
            <h1>Forward Ref</h1>
            <ForwardRef/>
    </div>
 </>
  )
}

export default App
