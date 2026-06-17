import React, { useState } from 'react'

const HandlingRadioButtons = () => {
  const[gender,setGender] = useState('female')
  const[city,setCity] = useState('delhi')
  return (
    <div style={{border:"3px solid green",textAlign:"center",boxShadow:"5px 5px 5px rbga(0,0,0,0.5)"}}>
      <h1>Handling Radio Buttons</h1>
      <h4>Select Gender</h4>
      <input type="radio" name='gender' id='male' value={"male"} onChange={(event)=>setGender(event.target.value)} 
      checked={gender==='male'}/>
      <label htmlFor="male">Male</label>

      <input type="radio" name='gender' id='female' value={"female"} onChange={(event)=>setGender(event.target.value)}
      checked={gender==='female'}/>
      <label htmlFor="female">Female</label>

      <input type="radio" name='gender' id='other' value={"other"} onChange={(event)=>setGender(event.target.value)}
      checked={gender==='other'}/>
      <label htmlFor="female">Other</label>

      <h2 style={{color:"blue"}}>Selected Gender: {gender}</h2>

      <br />
      <h2>Select City</h2>
      <label htmlFor="city">Select city </label>
      <select defaultValue={'Punjab'} onChange={(event)=>setCity(event.target.value)} id="state">
        <option value="Delhi">Delhi</option>
        <option value="UP">Up</option>
        <option value="Punjab">Punjab</option>
        <option value="Gujrat">Gujrat</option>
      </select>

      <h3 style={{color:"green"}}>Selected City: {city}</h3>
    </div>
  )
}

export default HandlingRadioButtons