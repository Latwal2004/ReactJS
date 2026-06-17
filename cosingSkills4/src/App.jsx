// import { useContext, useState } from 'react'
// import College from './Components/College'
// import {subjectContext} from './Components/ContextData'
// function App() {
// const [subject,setSubject] = useState("English")
//   return (
//   <div style={{backgroundColor:"yellow", padding:"10px"}}>
//     <subjectContext.Provider value={subject}>
//       <select defaultValue={subject} onChange={(event) => setSubject(event.target.value)}>
//         <option value="">Select Subject</option>
//         <option value="math">Maths</option>
//         <option value="history">history</option>
//         <option value="english">english</option>
//       </select>
//         <h1>Context api</h1>
//         <College/>
//     </subjectContext.Provider>
    

//   </div>
//   )
// }
 
// export default App  //ContextApiComponent
import React from 'react'
import Parent from './ContextAPIComponent/Parent'
import userContext from './ContextAPIComponent/UserContext'
const App = () => {
  const user = 'Harish'
  return (
    <div style={{backgroundColor:"grey", padding:"10px",  textAlign:"center"}}>
      <h1>App Compnent</h1>
      <userContext.Provider value={user}>
          <Parent/>
      </userContext.Provider>
    </div>
  )
}

export default App