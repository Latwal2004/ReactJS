import React from 'react'
import GrandChild from './GrandChild'
const Child = () => {
    return (
        <div style={{backgroundColor:"orange", padding:"10px"}}>  
            <h1>Child Component</h1>
            <GrandChild />
        </div>
    )
}

export default Child