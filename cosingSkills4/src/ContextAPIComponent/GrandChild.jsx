import React from 'react'
import userContext from './UserContext'
import { useContext } from 'react'
const GrandChild = () => {
    const user = useContext(userContext)
  return (
    <div style={{backgroundColor:"green", padding:"10px"}}>
        <h1>User Name  is : {user}</h1>
    </div>
  )
}

export default GrandChild