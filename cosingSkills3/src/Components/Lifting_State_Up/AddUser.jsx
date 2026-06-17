import React from 'react'

const AddUser = ({setUser}) => {
  return (
    <div>
        <h1>Lifting State Up In React</h1>
        <input type="text" placeholder='enter the user' onChange={(event) => setUser(event.target.value)} />
       <hr />
    </div>
  )
}

export default AddUser