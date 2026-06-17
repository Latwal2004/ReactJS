import React from 'react'
import { useState } from 'react'
const DerivedState = () => {
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState('');
    const handleAddUser = () => {
        setUsers([...users, user])
    }
    const totalUser = users.length;
    const latUser = users[users.length - 1];
    const uniqueUsers = [...new Set(users)].length
    return (
        <div>
            <h1>Derived State in React</h1>
            <h2>Total Users:{totalUser} </h2>
            <h2>Last Users :{latUser} </h2>
            <h2>unique Users :{uniqueUsers} </h2>
            <input onChange={(event) => setUser(event.target.value)} type="text" placeholder='add new user' />
            <br />
            <button onClick={handleAddUser}>Add User</button>
            {
                users.map((item, index) => (
                    <h4 key={index}>{item}</h4>
                ))
            }
        </div>
    )
}

export default DerivedState