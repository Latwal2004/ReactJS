import React from 'react'
import { useContext } from 'react'
import {subjectContext} from './ContextData'
const Subject = () => {
    const subject = useContext(subjectContext)
  return (
    <div style={{backgroundColor:"green", padding:"10px"}}> 
        <h1>Subject is:{subject} </h1>
    </div>
  )
}

export default Subject