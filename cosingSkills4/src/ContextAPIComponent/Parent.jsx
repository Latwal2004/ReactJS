import React from 'react'
import Child from './Child'
const Parent = () => {
  return (
    <div style={{backgroundColor:"skyblue", padding:"10px"}}>

      <h1>Parent Component</h1>
      <Child/>
    </div>
  )
}

export default Parent