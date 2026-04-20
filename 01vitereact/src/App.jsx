import { useState } from 'react'
import Chai from './chai'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Welcome to vite react folder structure and project creation here Index file is out source folder.</h1>
    <Chai/>
    <p>In this We Will learned How We Can Create a New file and return something from it and then importing that file to app.jsx and second we will learned how we will return multiple html tags in app.jsx as by default it retun only a single tags</p>
    <p>Naming convention rules:- in ffunction first letter must be capital recomended</p>

    <h2>Using fragments</h2>
    </>
  )
}

export default App
