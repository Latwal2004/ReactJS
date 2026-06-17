import React, { useState } from 'react'

const UpdatingObjectState = () => {
    const [data,setData] = useState({
        name:'Harish',
        address:{
            city:'Delhi',
            country:'India'
        }
    })

    const handleName = (val) =>{
        data.name = val;
        setData({...data})
    }
    const handleUpdateCity = (city) =>{
        data.address.city = city;
        setData({...data,address:{...data.address,city}})
    }
  return (
    <div>
        <h1>Updating Object State</h1>
        <input type="text" onChange={(event) => handleName(event.target.value)} />
        <input type="text" onChange={(event) => handleUpdateCity(event.target.value)} />
        <h2>Name:{data.name}</h2>
        <h2>City:{data.address.city}</h2>
        <h2>Country:{data.address.country}</h2>
    </div>
  )
}

export default UpdatingObjectState