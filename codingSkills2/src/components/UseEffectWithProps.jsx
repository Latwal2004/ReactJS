import React, { useEffect } from 'react'

const UseEffectWithProps = ({count,data}) => {
    function countCall(){
        console.log('Opps Counter is called')
    }
    function dataCall(){
        console.log('Opps Data  is called')
    }


    useEffect(() =>{
        countCall();
    },[count])

    useEffect(() =>{
        dataCall();
    },[data])

  return (
    <div>
        <h1>Count: {count}</h1>
        <h1>Data: {data}</h1>
     </div>
  )
}

export default UseEffectWithProps