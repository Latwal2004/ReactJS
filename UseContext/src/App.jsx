import { createContext, useState } from 'react'
import './App.css'
import ChildA from './components/ChildA';

//step1: create Context
// const UserContext = createContext();
const ThemeContext = createContext();

function App() {

  // const[user,SetUser] = useState({name:'Harish'})
  const [theme, setTheme] = useState('light');
  return (
    <>
      {/* // step2: wrap all the child inside a provider which you want to make the consumer */}

      {/* step 3 : passing value */}
      {/* <UserContext.Provider value={user}>
           <ChildA />
      </UserContext.Provider> */}
      <ThemeContext.Provider value={{theme, setTheme}}>
        <div id='container' style={{
          backgroundColor:theme ==='light' ? 'beige':'black'
        }} >
          <ChildA />
        </div>
      
      </ThemeContext.Provider>

    </>
  )
}
export default App
// export {UserContext}
export { ThemeContext }