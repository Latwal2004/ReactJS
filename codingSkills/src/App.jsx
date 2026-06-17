import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import WelcomeUser,{Login,Profile,UserName} from './Components/UserComponent'
import {User} from './Components/Todo'
import Props  from './Components/Props'
import ArraysAsProps  from './Components/ArraysAsProps'
import JsxAsProps from './Components/JsxAsProps'
import Task1 from './Components/Task1'
import ControlledComponent from'./Components/ControlledComponent'
import HandlingCheckbox from  './Components/HandlingCheckbox'
import HandlingRadioButtons from  './Components/HandlingRadioButtons'
import  LoopingInJSX from './Components/LoopingInJSX'
import  ReUseComponentinLoop from './Components/ReUseComponentinLoop'
import  ClockComponent from './Components/ClockComponent'
import  PassingFunctionAsProps from './Components/PassingFunctionAsProps'

function App() {
  const [count, setCount] = useState(0)

  {/* passing props as a variable */}
  // let name="Nikhil thakur";
  // let age= 22;
  // let email = "thakurNikhil8427@gmail.com"

let UserObject = {
  name:"Ansh Sharma",
  age:22,
  email:"anshSharma@gmail.com"
}
let UserObject2 = {
  name:"Harish Latwal",
  age:22,
  email:"harishlatwal688@gmail.com"
}
let UserObject3= {
  name:"Anshul Sharma",
  age:22,
  email:"panditJi@gmail.com"
}

// passing array as props to the child
let collegeName =["IIT","NIT","IIIT","GFTIS"];


// clock state
const [color,setColor] = useState("green");


  {/* passing Function as a Props */}

    function greetUser(name){
      alert(`Hello ${name} We Are Passing function As Props.`)
    }
  return (
  <>
  <WelcomeUser/>
  <Login/>
  <Profile/>
  <h2>{UserName}</h2>
  <User/>

  {/* props passing */}
  {/* <Props name ="Harish Latwal" age={22} email="harishlatwal688@gmail.com"/> */}

  {/* passing props as a variable */}
  {/* <Props name ={name} age={age} email={email}/> */}

{/* passing object as a props */}
  <Props user={UserObject}/>
  <Props user={UserObject2}/>
  <Props user={UserObject3}/>

<hr />
{/* passing array as props to the child */}
  <ArraysAsProps name = {collegeName[0]}/>

<hr />

{/* passing Function as a Props */}
  <PassingFunctionAsProps greetUser={greetUser} name="Harish"/>
  <PassingFunctionAsProps greetUser={greetUser} name="Nikhil"/>
  <PassingFunctionAsProps greetUser={greetUser} name="Anshul"/>

<hr />
<Task1/>

<hr />
<ControlledComponent/>
<br />

<hr />
{/* handling checkboxes */}
<HandlingCheckbox/>

<hr />
{/* Handling Radio Buttons */}
<HandlingRadioButtons/>

<hr />
{/* looping in Jsx showing Multiple data using map */}
  <LoopingInJSX/>

<hr />
  {/* reusing Coponent using Loop */}
    <ReUseComponentinLoop/>




    <div>
      <h1>React JS Digital Clock</h1>
      <select value={color} onChange={(event) => setcolor(event.target.value)}>
        <option value={"red"}>Red</option>
        <option value={"green"}>green</option>
        <option value={"yellow"}>Yellow</option>
        <option value={"orange"}>orange</option>
      </select>
    </div>

        <ClockComponent color={color}/>
  
    
  </>
  )
}

export default App



// paasing element as props 
//   return (
//       <div>
//          <JsxAsProps>
//                 <h1>Hello Harish</h1>
//                 <p>Learning React Props</p>
//                 <button>Click Me</button>
//          </JsxAsProps>

//          <JsxAsProps color="red" >
//                 <h1>Hello Harish</h1>
//                 <p>Learning React Props</p>
//                 <button>Click Me</button>
//          </JsxAsProps>

//          <JsxAsProps color="orange" >
//                 <h1>Hello Harish</h1>
//                 <p>Learning React Props</p>
//                 <button>Click Me</button>
//          </JsxAsProps>

//          <JsxAsProps color="blue">
//                 <h1>Hello Harish</h1>
//                 <p>Learning React Props</p>
//                 <button>Click Me</button>
//          </JsxAsProps>
//       </div>

  
//   )
// }

// export default App
