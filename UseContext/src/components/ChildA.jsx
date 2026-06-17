import React, { useContext } from 'react'
import ChildB from './ChildB'
// import { UserContext } from '../App'

const ChildA = () => {

    // const user1 = useContext(UserContext)
  return (
    <div>
         {/* Data Accessed In Child A: {user1.name} */}
        <ChildB/>
    </div>
  )
}

export default ChildA