import { useCallback, useState, useEffect, useRef } from 'react'
import './App.css'

function App() {

  // States
    // length controls how many characters the password will have (default: 8)
  const [length, setLength] = useState(8)
  // numberAllowed toggles whether digits (0-9) are included in the password
  const [numberAllowed, setNumberAllowed] = useState(false);
  // charAllowed toggles whether special characters (!@#$...) are included
  const [charAllowed, setCharAllowed] = useState(false);
  // password holds the currently generated password string shown in the input
  const [password, setPassword] = useState("")


  //userefHooks
    // `passwordRef` gives us a direct reference to the <input> DOM element that we used in below project
  // so we can programmatically select its text for clipboard copy
  const passwordRef = useRef(null)

//used to copy the input method
  // useCallback memoizes this function so it's only re-created when `password` changes.
  // Without memoization, a new function object is created on every render,
  // which could cause unnecessary re-renders in child components
  const copyPasswordToClipboard = useCallback(() => {

    //optimization optional checking because null values can also be their ie. ref can be null. 
    passwordRef.current?.select();
    
    //optimization  setSelectionRange visually highlights characters 0–15 in the input field
    passwordRef.current?.setSelectionRange(0,15)

     // Write the current password value to the system clipboard
    window.navigator.clipboard.writeText(password)
  }, [password])// Re-create this function only when `password` changes



  // --password genreator--
    //we used the  useCallback  that memoizes the generator so it isn't redefined on every render.
  // It only re-creates when length, numberAllowed, or charAllowed change.
  const passwordGenertor = useCallback(() => {
    let pass = ''
    // Start with the base alphabet
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

      // Conditionally extend the character pool based on user toggles ie if checked number is included in the above str
    if (numberAllowed) str += "0123456789"

    //ie if checked specialcharactet is included in the above str
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`"

    ///generating random password
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)

  },//here we talk about th optimization  
  // Dependencies: re-create this function whenever any of these values change
    [length, numberAllowed, charAllowed, setPassword])




  // useEffect runs the password generator on initial mount AND
  // whenever any of the listed dependencies change (length, toggles, or the generator itself).
  // This keeps the displayed password always in sync with the current settings.
  //useeffect  runs when page reload and rerun when it is 
  useEffect(() => {
    passwordGenertor()
  },
  //here we talked about that if some of below dependencies changed rerun it you can left passwordGenerator in dependencies it only for the optimization function
    [length, numberAllowed, charAllowed, passwordGenertor])
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-4 my-8 bg-gray-800 '>
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text"
            value={password}
            className='outline-none w-full py-1 px-3 bg-white text-black'
            placeholder='Password'
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipboard}
            className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 cursor-pointer'>
            copy</button>

        </div>
        <div className='flex text-sm gap-x-2'>

          <div className='flex items-center gap-x-1'>
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setLength(e.target.value) }}
            />
            <label>Length:{length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id='numberInput'
              onChange={() => {
                //  Special character toggle — flips `charAllowed` boolean 

                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Number</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id='charInput'
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="charInput">Character</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
