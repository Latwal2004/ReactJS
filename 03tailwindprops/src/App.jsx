import { useState } from 'react'
import './App.css'
import Card from './components/card'
function App() {

  let myObj = {
    username: "Harish Latwal",
    age: 21
  }

  let newArr = [1, 2, 3, 4];
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-4xl m'>Tailwind CSS</h1>
      {/* //passing props specially an object */}
      {/* <Card channel = "RaectJS" userInfo = {myObj} someObj={newArr} /> */}
      {/* //passing multiple props */}
      <Card username="Harish" btnText="clcik me" userNumber="1" />
      <Card username="Ansh Sharma" btnText="Clicked" userNumber="2" />
      <Card username="Nikhil" btnText="visit me" userNumber="3" />
    </>
  )
}

export default App
