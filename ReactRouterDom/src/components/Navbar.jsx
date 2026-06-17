import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex '>
      <ul className='flex justify-between items-center'>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-green-500 font-bold border-2 border-red-500"
                : "text-cyan-900"
            }
          >
            Home
          </NavLink>
        </li>
<li>
  
</li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-blue-500 font-bold"
                : "text-gray-500"
            }
          >
            About
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive
                ? "text-blue-500 font-bold"
                : "text-gray-500"
            }
          >
            Dashboard
          </NavLink>
          
        </li>
      </ul>
    </div>
  )
}

export default Navbar