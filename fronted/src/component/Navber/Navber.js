import React from 'react'
import './nanlink.css'
import{NavLink} from 'react-router-dom'
const Navber = () => {
  return (
    <div>
       <nav>
        <NavLink to={"/home"} className='nav_link'> Home</NavLink>
        <NavLink to={"/login"} className='nav_link'>Patient Information</NavLink>
        <NavLink to={"/doctor"} className='nav_link'>Doctor</NavLink>
       </nav>
    </div>
  )
}

export default Navber
