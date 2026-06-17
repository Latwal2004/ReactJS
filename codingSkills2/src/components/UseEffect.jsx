import React, { useState } from 'react'
import { useEffect } from 'react'

const UseEffect = () => {
    const[counter,setCounter] = useState(0)
    const[data,setsetData] = useState(0)

    function counterCall(){
        console.log("Counter is called")
    }


    function dataCall(){
        console.log('data Function is called')
    }


    
    // infiniteRun
    // useEffect(() =>{
    //     counterCall();        
    // },)
    

    
    //Runs on mount only
    // useEffect(() =>{
    //     counterCall();        
    // },[counter])

    
    //Runs when Counter Value Chnages
    useEffect(() =>{
        counterCall();        
    },[counter])
   
    useEffect(() =>{
        dataCall();        
    },[data])
    
  return (
    <div>
            <h1>Counter : {counter}</h1>
            <button onClick={() => setCounter(counter + 1)}>Counter:{counter}</button>
            
            <h1>Data : {data}</h1>
            <button onClick={() => setsetData(data + 1)}>Data:{data}</button>
    </div>
  )
}

export default UseEffect