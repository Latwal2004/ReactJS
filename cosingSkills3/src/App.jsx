
import { useState } from 'react'
import DerivedState from './Components/DerivedState'
import AddUser from './Components/Lifting_State_Up/AddUser'
import DisplayUser from './Components/Lifting_State_Up/DisplayUser'
import UpdatingObjectState from './Components/UpdatingObjectState'

function App() {

  const [user,setUser] = useState('');
  return (
    <div>
      <DerivedState/>
      <br />

      <AddUser setUser={setUser}/>
      <DisplayUser user={user}/>

      <UpdatingObjectState/>
    </div>
  )
}

export default App
