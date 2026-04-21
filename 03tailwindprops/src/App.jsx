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
      {/* //passing props specially an object  last passed object is shown on Ui*/}
      {/* <Card channel = "RaectJS" userInfo = {myObj} someObj={newArr} /> */}
      {/* //passing multiple props as children to the card function */}

      <Card username="Harish" btnText="clcik me" employeeCard="#agndlove0231" userRegisterDate={"21-04-2026"}/>
      <Card username="Ansh Sharma" btnText="Clicked" employeeCard="#bilbo bergins" userRegisterDate={"21-04-2026"} />
      <Card username="Nikhil" btnText="visit me" employeeCard="#Samug dragon" userRegisterDate={"21-04-2026"} />
    </>
  )
}

export default App
