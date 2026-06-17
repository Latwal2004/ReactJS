import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Outlet } from 'react-router-dom';

const DashBoard = () => {
const navigate = useNavigate();
function handleClick(){
  navigate("/")
}

  return (
    <div style={{display:'flex',flexDirection:"column", gap:'4px', width:"400px"}}> 
    <h1>DashBoard</h1>
      <br />
      <button style={{width:"100px", height:"50px", backgroundColor:"green", borderRadius:"10px"}} onClick={handleClick}>
        Go Back to Home
      </button>
      <Outlet/>
    </div>
  )
}

export default DashBoard