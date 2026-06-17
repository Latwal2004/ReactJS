import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
const navigate = useNavigate();
  function handleClick(){
      navigate('/dashboard');
  }
  return (
    <div>Home Page
    <button onClick={handleClick}>
      Move to dashboard
      </button></div>
  )
}

export default Home