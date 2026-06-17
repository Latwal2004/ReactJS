import React from 'react'

const PassingFunctionAsProps = ({greetUser,name}) => {
  return (
    <div>
        <h1>Passing Function AsProps</h1>
        <div>
            <button onClick={() => greetUser(name)}>Greet User</button>
        </div>
    </div>
  )
}

export default PassingFunctionAsProps